# Security Implementation

This portfolio website implements multiple layers of security to protect against common web vulnerabilities.

## Implemented Security Measures

### 1. Content Security Policy (CSP)

- **Purpose**: Prevents XSS attacks by controlling which resources can be loaded
- **Implementation**: Meta tags in all HTML files
- **Features**:
  - `object-src 'none'` - Blocks Flash and other plugins
  - `upgrade-insecure-requests` - Automatically upgrades HTTP to HTTPS
  - Strict script/style sources
  - Frame protection

### 2. XSS Protection

- **sanitizeHTML()**: Escapes all user input
- **sanitizeTranslation()**: Allows only safe HTML tags in translations
  - Allowed tags: `ul`, `li`, `p`, `br`, `strong`, `em`, `span`, `a`
  - Removes all event handlers (`onclick`, `onerror`, etc.)
  - Blocks `javascript:` protocol
  - Auto-adds `rel="noopener noreferrer"` to external links

### 3. Input Validation

- Language code validation (`isValidLanguage`)
- Safe localStorage access with error handling
- Type checking for all user inputs

### 4. HTTP Security Headers

Located in `_headers` file for GitHub Pages/Netlify:

- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Browser XSS filter
- `Strict-Transport-Security` - Forces HTTPS
- `Permissions-Policy` - Disables unnecessary browser features

### 5. Secure External Links

All external links automatically get:

- `rel="noopener"` - Prevents `window.opener` access
- `rel="noreferrer"` - Doesn't send referrer information

### 6. Responsible Disclosure

- `security.txt` file in `.well-known/` directory
- Contact information for security researchers

## Testing Security

### Check CSP

```bash
curl -I https://your-domain.com | grep -i content-security
```

### Scan for vulnerabilities

- [Mozilla Observatory](https://observatory.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [OWASP ZAP](https://www.zaproxy.org/)

## What's Protected Against

✅ **XSS (Cross-Site Scripting)** - Input sanitization + CSP  
✅ **Clickjacking** - X-Frame-Options + CSP frame-ancestors  
✅ **MIME Sniffing** - X-Content-Type-Options  
✅ **Mixed Content** - upgrade-insecure-requests  
✅ **Malicious Scripts** - Strict CSP script-src  
✅ **Code Injection** - HTML sanitization  
✅ **Tabnabbing** - rel="noopener noreferrer"  

## Maintenance

- Review CSP policy when adding new external resources
- Update `security.txt` expiration date annually
- Test sanitization when adding new translation keys with HTML
- Monitor browser console for CSP violations

## Notes

- `'unsafe-inline'` is used for scripts/styles due to Google Analytics and Clarity
- To remove `'unsafe-inline'`, move all inline scripts to external files and use nonces
- GitHub Pages may not support all headers in `_headers` file
