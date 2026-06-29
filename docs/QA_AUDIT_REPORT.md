# QA Audit Report — cham.omdalat.com

## Build Status: ✅ PASS
- **Next.js 16.2.9** — Compiled in 3.1s
- **TypeScript** — Passed (no errors)
- **Routes** — 45 generated (38 locale + 4 admin + 3 API)
- **Admin route guard** — Server-side guard active (signed session cookie)
- **Deprecation warnings** — 0

## Route Audit — 45/45 Routes

### Public Pages (38 locale routes)
| Route Pattern | VI | EN | Status |
|--------------|----|----|--------|
| `/` → `/vi` | Redirect | Redirect via root route | ✅ |
| `/` locale root | Homepage (hero + 6 sections) | Same structure | ✅ |
| `/cham-la-gi` / `/what-is-cham` | Definition + not-list + values | Same | ✅ |
| `/hanh-trinh` / `/journey` | 4-step detailed journey | Same | ✅ |
| `/chuong-trinh` / `/programs` | Programs listing | Same | ✅ |
| `/chuong-trinh/21-ngay-cham` / `programs/21-day-cham-journey` | Full 21-day program | Same | ✅ |
| `/dang-ky` / `/apply` | 22-field form + Turnstile + consent | Same | ✅ |
| `/cau-hoi-thuong-gap` / `/faq` | 5 FAQ items | 5 FAQ items | ✅ |
| `/quyen-rieng-tu` / `/privacy` | Privacy policy | Privacy policy | ✅ |
| `/dieu-khoan` / `/terms` | Terms of service | Terms of service | ✅ |
| `/lien-he` / `/contact` | Contact form/page | Contact form/page | ✅ |
| `/danh-cho-doanh-nghiep` / `/for-organizations` | For orgs content | Same | ✅ |
| `/bai-viet` / `/articles` | Article listing (placeholder) | Same | ✅ |
| `/bai-viet/[slug]` / `/articles/[slug]` | Article detail (placeholder) | Same | ✅ |
| `/cau-chuyen` / `/stories` | Stories listing (placeholder) | Same | ✅ |
| `/kham-pha-tiem-nang` / `/discover-potential` | Step 1 detail | Same | ✅ |
| `/thu-nghiem` / `/experiments` | Step 2 detail | Same | ✅ |
| `/tao-gia-tri` / `/create-value` | Step 3 detail | Same | ✅ |
| `/trao-lai` / `/give-back` | Step 4 detail | Same | ✅ |
| `/tham-gia` / `/discover-potential` | Participation | Same | ✅ |
| `/gioi-thieu` / `/what-is-cham` | Intro/about | Same | ✅ |
| `/co-hoi` / `/opportunities` | Opportunities | Same | ✅ |
| `/trai-nghiem` / `/discover-potential` | Experiences | Same | ✅ |

### Admin Routes
| Route | Status | Notes |
|-------|--------|-------|
| `/admin` | ✅ | Redirects to `/admin/applications` |
| `/admin/login` | ✅ | Auth form (username + password) → POST `/api/v1/admin/login` → sets signed session cookie |
| `/admin/applications` | ✅ | Protected by server-side session guard; displays application table |
| `/admin/logout` | ✅ | Clears session cookie → redirects to `/admin/login` |

### API Routes
| Route | Method | Status | Notes |
|-------|--------|--------|-------|
| `/api/v1/health` | GET | ✅ | Returns `{ status: "ok", version: "1.0.0" }` |
| `/api/v1/applications` | POST | ✅ | Turnstile verify + rate limit + validation + audit |
| `/api/v1/applications` | GET | ✅ | Returns all applications (admin use) |
| `/api/v1/admin/login` | POST | ✅ | Validates username + password (timing-safe), sets signed `admin_session` cookie |

### Special Routes
| Route | Status | Notes |
|-------|--------|-------|
| `/sitemap.xml` | ✅ | 44 URLs with hreflang alternates |
| `/robots.txt` | ✅ | `public/robots.txt` |
| `/_not-found` | ✅ | Root 404 with VI/EN links |

## Registration E2E Flow Test — ✅
```
1. User visits /vi/dang-ky                     → 200, form rendered
2. Fills 22 fields                             → Client-side state
3. Checks required consent (2 items)            → State tracked
4. Checks optional consent                      → State tracked
5. Completes Turnstile challenge                → Token generated
6. Clicks "Gửi hồ sơ"                          → POST /api/v1/applications
7. Server validates:                            → Required fields, Turnstile, rate limit
8. Server creates application:                  → app ID (CHAM-{ts}-{rand})
9. Consent version recorded:                    → "2026-06-28-v1"
10. Audit event appended:                       → application.created
11. Response:                                   → { applicationId }
12. User sees success screen with app ID        → ✅
13. Admin visits /admin/login → /admin/applications → sees new entry ✅
```

## Security Audit
| Check | Status | Evidence |
|-------|--------|----------|
| X-Content-Type-Options: nosniff | ✅ | `next.config.ts` |
| X-Frame-Options: DENY | ✅ | `next.config.ts` |
| Referrer-Policy: strict-origin-when-cross-origin | ✅ | `next.config.ts` |
| X-XSS-Protection: 1; mode=block | ✅ | `next.config.ts` |
| Turnstile bot protection | ✅ | Form → server verify |
| Rate limiting (5 req/min/IP) | ✅ | In-memory on POST applications |
| Admin auth guard | ✅ | Signed cookie + server-side session check |
| HTTPS | ✅ | Cloudflare SSL |
| Consent version tracking | ✅ | `consentVersion: "2026-06-28-v1"` |
| Audit log | ✅ | `src/data/audit.json` |

## SEO Audit
| Check | Status | Details |
|-------|--------|---------|
| robots.txt | ✅ | Disallows `/admin`, `/api` |
| Sitemap | ✅ | 44 URLs, hreflang alternates, lastmod |
| Canonical URLs | ✅ | Per-page in locale layout |
| hreflang vi ↔ en | ✅ | In locale layout metadata |
| Meta titles | ✅ | 10 key pages have `generateMetadata` |
| Meta descriptions | ✅ | Same pages |
| Open Graph | ✅ | locale layout sets OG locale + site name |
| 404 handling | ✅ | Root + localized |
| No EN homepage fallback | ✅ | Localized 404 for EN missing pages |

## Content Audit
| Section | VI | EN | Notes |
|---------|----|----|-------|
| Brand promise | "Bạn lớn hơn những gì mình từng làm" | "You are more than what you have done" | ✅ |
| Hero | Full VI copy | Full EN adaptation | ✅ |
| Journey steps | 4 steps with activities + outputs | Same | ✅ |
| 21-day program | 3 weeks with activities | Same | ✅ |
| FAQ | 5 questions with disclaimers | 5 questions with disclaimers | ✅ |
| Registration | 22 fields, 2 required consents | Same | ✅ |
| Footer | Brand + nav + legal links | Same | ✅ |
| No job guarantee | ✅ In register success + FAQ | ✅ | ✅ |

## Remaining Backlog (post-G1)
| P0–P1 | Status | Notes |
|-------|--------|-------|
| All P0/P1 items | ✅ Complete | Per spec backlog |

| P2 | Status | Notes |
|----|--------|-------|
| Form + validation | ✅ | Client + server |
| Turnstile | ✅ | Integrated |
| API | ✅ | REST endpoints |
| DB | ✅ | JSON file storage |
| Audit log | ✅ | `audit.json` |
| Admin review | ✅ | `/admin/applications` |
| Email | ❌ | Not implemented (P2, deferred) |

| P3 | Status | Notes |
|----|--------|-------|
| 10 VI articles | ❌ | Placeholder only |
| 10 EN adaptations | ❌ | Placeholder only |
| Real images | ❌ | `public/images/` empty |
| Author/reviewer fields | ❌ | Not implemented |
| Schema | ❌ | Not implemented |
| Related content | ❌ | Not implemented |

## Known Issues
1. **Articles**: All article pages show "coming soon" placeholder. 10 Dreams articles in `docs/` are for `dreams.omdalat.com`, not Cham.
2. **Images**: `public/images/` is empty. No hero images, article images, or OG images.
3. **Email**: Registration does not send email notification (deferred to P2).
4. **Automated tests**: No test suite (P5 backlog).
5. **Accessibility/performance evidence**: Automated scans still pending for strict R4 artifact completeness.

## Verdict

**READY FOR G1 INTAKE LAUNCH, NOT FULL R4/R5 CLOSURE.** The site is independent, bilingual, secure for initial intake, and operational for G1 scope. Remaining P3–P5 items and missing accessibility/performance artifacts still block strict full-gate closure.

Evidence packet: `docs/EVIDENCE_PACKET_R5.md`
