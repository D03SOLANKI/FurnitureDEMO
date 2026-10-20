from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('https://graft.framer.website/', wait_until='networkidle')
    time.sleep(1)
    
    # 1. Capture Hero
    page.screenshot(path='scroll_step_0.png')
    
    # 2. Scroll to categories
    page.evaluate('window.scrollTo(0, 950)')
    time.sleep(1.5)
    page.screenshot(path='scroll_step_1.png')
    
    # 3. Scroll to products
    page.evaluate('window.scrollTo(0, 1950)')
    time.sleep(1.5)
    page.screenshot(path='scroll_step_2.png')

    # 4. Check menu click
    page.evaluate('window.scrollTo(0, 0)')
    time.sleep(0.5)
    # Click 6-dot menu if present
    menu_btn = page.query_selector('[aria-label="Menu"], [data-framer-name="Menu"], nav, .framer-18d3npr')
    if menu_btn:
        menu_btn.click()
        time.sleep(1)
        page.screenshot(path='menu_opened.png')
        print("Menu opened and captured!")
    
    browser.close()
print("Finished capture!")
