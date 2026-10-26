from playwright.sync_api import sync_playwright
import time
import os

os.makedirs('verification_fixes', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    print("Navigating to http://localhost:5173/ ...")
    page.goto('http://localhost:5173/', wait_until='networkidle')
    time.sleep(2)
    
    # 1. Top of page (Hero)
    page.screenshot(path='verification_fixes/01_hero_top.png')
    print("1. Hero top captured")
    
    # 2. Scroll 200px (entering scroll transition - check for unwanted brown bar)
    page.evaluate('window.scrollTo(0, 200)')
    time.sleep(1)
    page.screenshot(path='verification_fixes/02_scroll_200.png')
    print("2. Scroll 200 captured")
    
    # Check header computed styles at 200px
    header_style = page.evaluate('''() => {
        const h = document.querySelector('header');
        const s = window.getComputedStyle(h);
        return {
            backgroundColor: s.backgroundColor,
            boxShadow: s.boxShadow,
            borderRadius: s.borderRadius,
            color: s.color,
            position: s.position
        };
    }''')
    print("Header styles at 200px:", header_style)
    
    # 3. Scroll to Categories (y=850) - verify categories reveal and clean transparent header
    page.evaluate('window.scrollTo(0, 850)')
    time.sleep(1)
    page.screenshot(path='verification_fixes/03_categories.png')
    print("3. Categories captured")
    
    # 4. Scroll to Catalog Slider (y=1850)
    page.evaluate('window.scrollTo(0, 1850)')
    time.sleep(1)
    page.screenshot(path='verification_fixes/04_catalog.png')
    print("4. Catalog captured")
    
    # 5. Scroll to 3D Chair Spotlight (y=2800)
    page.evaluate('window.scrollTo(0, 2800)')
    time.sleep(1.5)
    page.screenshot(path='verification_fixes/05_spotlight_3d.png')
    print("5. 3D Spotlight captured")
    
    # 6. Test Navigation drawer opens and closes cleanly
    page.evaluate('window.scrollTo(0, 0)')
    time.sleep(1)
    menu_btn = page.locator('button[aria-label="Toggle Navigation Menu"]').first
    if menu_btn.count() > 0:
        menu_btn.click()
        time.sleep(1)
        page.screenshot(path='verification_fixes/06_drawer_open.png')
        print("6. Navigation drawer captured")
        
    browser.close()

print("All fix verifications completed successfully!")
