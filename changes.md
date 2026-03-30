# CSS Cleanup Change Log

This file documents the unused selectors removed from `css/style.css` during the cleanup pass in this session.

## Summary

- Source baseline used for comparison: `Saansud Infra - Copy/css/style.css`
- Cleaned file: `Saansud Infra/css/style.css`
- Total unique selectors removed: **116**
- CSS line count changed from **3097** to **2277**.
- Note: `.container, .container-fluid` was cleaned up to `.container` (only the `container-fluid` portion was removed).

## Detailed Removed Selectors

### Base utilities and generic helpers

Generic helper classes that are no longer referenced by active HTML markup.

- `.container, .container-fluid`
- `.hidden`
- `.sec-pad`
- `.transformCenter`
- `.transition`

### Navigation and dropdown related selectors

Menu/dropdown-specific rules that were not found in active page structure at cleanup time.

- `.navbar .navbar-nav .nav-item .dropdown-menu li a`
- `.navbar div#navbarSupportedContent.show`
- `.navbar-nav .dropdown-menu`

### Career and job-listing module selectors

Selectors tied to the careers search/listing UI, which is currently commented out/inactive in HTML.

- `.job-list-sec`
- `.job-list-sec .career-card`
- `.job-list-sec .career-card .cta-wrap`
- `.job-list-sec .career-card .cta-wrap .btn`
- `.job-list-sec .career-card .title`
- `.job-list-sec .career-card .title > div`
- `.job-list-sec .career-card .title h2`
- `.job-list-sec .career-card .title h2 + span`
- `.job-list-sec .career-card .title span`
- `.job-list-sec .job-details`
- `.job-list-sec .job-details .bottom-cta`
- `.job-list-sec .job-details .bottom-cta a`
- `.job-list-sec .job-details .details-bottom`
- `.job-list-sec .job-details .details-bottom .job-meta h3`
- `.job-list-sec .job-details .details-bottom .job-meta h3 + span`
- `.job-list-sec .job-details .details-bottom p`
- `.job-list-sec .job-details .details-top`
- `.job-list-sec .job-details .details-top .title`
- `.job-list-sec .job-details .details-top .title .inline-flex`
- `.job-list-sec .job-details .details-top .title > div`
- `.job-list-sec .job-details .details-top .title h2`
- `.job-list-sec .job-details .details-top .title h2 + span`
- `.job-list-sec .job-details .details-top .title span`
- `.job-list-sec .nav-link .title span`
- `.job-list-sec .nav-link.active .career-card .btn, .job-list-sec .nav-link:hover .career-card .btn`
- `.job-list-sec .nav-link.active .career-card, .job-list-sec .nav-link:hover .career-card`
- `.job-list-sec .nav-link.active .title span, .job-list-sec .nav-link:hover .title span`
- `.job-list-sec .nav-pills .nav-link`
- `.search-wrap`
- `.search-wrap .form-control`
- `.search-wrap .form-control.location-icon`
- `.search-wrap .form-control.search-icon`
- `.search-wrap button`
- `a.bookmark`
- `a.share`
- `span.loc`
- `span.time`

### Blog/news/cards/filtering selectors

Selectors for blog/news cards, filtering controls, and isotope-style layouts not present in active pages.

- `.blog-card`
- `.blog-card .info`
- `.blog-card .post-meta`
- `.blog-card .post-meta span`
- `.blog-card .post-meta span.post-date`
- `.blog-card .post-meta span.post-time`
- `.blog-card .thumb`
- `.blog-card .thumb img`
- `.blog-card a.read-more`
- `.blog-card h2`
- `.blog-card h2 a`
- `.blog-card:hover h2`
- `.blog-content .post-meta`
- `.blog-content .post-meta span`
- `.blog-content .post-meta span.post-date`
- `.blog-content .post-meta span.post-time`
- `.blog-content blockquote`
- `.blog-content h1, .blog-content h2`
- `.blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5`
- `.blog-content img`
- `.isotope`
- `.isotope .grid-item`
- `.isotope .grid-item .video-card`
- `.isotope .grid-item.grid-item-2`
- `.isotope-pager`
- `.isotope-pager a`
- `.isotop-section h2`
- `.news-page .isotope .post-card .card-content .title`
- `.news-page ul.filters`
- `.news-page ul.filters .btn`
- `.post-card`
- `.post-card .card-content`
- `.post-card .card-content .title`
- `.post-card .post-meta`
- `.post-card .post-meta svg`
- `.post-card a`
- `.post-card img`
- `.post-card:before`
- `.post-card:hover`
- `.video-card`
- `.video-card .image-wrap img`
- `.video-card .video-info`
- `.video-card .video-info .title`
- `.video-card .video-info .title, .video-card .video-info p`
- `.video-card .video-wrap`
- `.video-card .video-wrap iframe`
- `ul.filters`
- `ul.filters .btn`
- `ul.filters .btn.active`
- `ul.filters .btn:not([data-filter="*"])`

### Contact and awards card selectors

Legacy contact/awards card blocks not used by currently rendered page sections.

- `.awards-single`
- `.awards-single .thumb`
- `.awards-single .thumb img`
- `.awards-single h3`
- `.contact-card`
- `.contact-card .info`
- `.contact-card .info .subtitle`
- `.contact-card .info .title`
- `.contact-card .info p`
- `.contact-card .info ul li a`
- `.contact-card .info ul li a[href^="mailto:"]`
- `.contact-card .info ul li a[href^="tel:"]`
- `.contact-card .thumb`
- `.contact-card .thumb img`

### Interior pricing/detail extra selectors

Extra pricing/detail card styles not used by the current interior page markup.

- `.detail-card`
- `.detail-icon`
- `.highlight-card`
- `.price`
- `.price-label`
- `.pricing-card`
- `.pricing-card h3`

## Verification Notes

- The cleanup list is generated by diffing selector presence between the baseline and current `style.css`.
- Only selectors absent from the cleaned file are listed above.
- Vendor CSS files were not modified.
