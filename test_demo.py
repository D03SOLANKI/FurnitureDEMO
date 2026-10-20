from playwright.sync_api import sync_playwright
import time
import os

os.makedirs('verification_screens', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    print("Navigating to http://localhost:5173/ ...")
    page.goto('http://localhost:5173/', wait_until='networkidle')
    time.sleep(2)
    
    # 1. Hero
    page.screenshot(path='verification_screens/01_hero.png')
    print("1. Hero captured")
    
    # 2. Categories
    cat = page.locator('#categories, section:has-text("We will create for you")').first
    if cat.count() > 0:
        cat.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/02_categories.png')
        print("2. Categories captured")
        
    # 3. Catalog
    cat_slider = page.locator('#works, section:has-text("Not just furniture")').first
    if cat_slider.count() > 0:
        cat_slider.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/03_catalog.png')
        print("3. Catalog captured")
        
    # 4. Onda 3D Spotlight
    onda = page.locator('section:has-text("Meet Onda chair")').first
    if onda.count() > 0:
        onda.scroll_into_view_if_needed()
        time.sleep(1.5)
        page.screenshot(path='verification_screens/04_onda_3d.png')
        print("4. Onda 3D captured")
        
        # Click Walnut swatch
        walnut = page.locator('button:has-text("Smoked Walnut")').first
        if walnut.count() > 0:
            walnut.click()
            time.sleep(1)
            page.screenshot(path='verification_screens/04_onda_3d_walnut.png')
            print("4b. Onda 3D Walnut captured")

    # 5. Projects Showcase
    proj = page.locator('#inspiration, section:has-text("Our new projects in full interior")').first
    if proj.count() > 0:
        proj.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/05_projects.png')
        print("5. Projects captured")
        
    # 6. Services & Process
    services = page.locator('#services, section:has-text("Creating your idea")').first
    if services.count() > 0:
        services.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/06_services_process.png')
        print("6. Services captured")
        
    # 7. Testimonials & Counters
    testim = page.locator('section:has-text("People say...")').first
    if testim.count() > 0:
        testim.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/07_testimonials.png')
        print("7. Testimonials captured")
        
    # 8. Team & Moodboard
    team = page.locator('#team, section:has-text("Meet our creators")').first
    if team.count() > 0:
        team.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/08_team_moodboard.png')
        print("8. Team & Moodboard captured")
        
    # 9. Contact Card
    contact = page.locator('#contact, section:has-text("Leave a request")').first
    if contact.count() > 0:
        contact.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/09_contact.png')
        print("9. Contact captured")
        
    # 10. Footer & Social
    footer = page.locator('footer').first
    if footer.count() > 0:
        footer.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='verification_screens/10_footer.png')
        print("10. Footer captured")
        
    # 11. Nav Drawer
    page.evaluate('window.scrollTo(0, 0)')
    time.sleep(1)
    menu_btn = page.locator('button[aria-label="Toggle Navigation Menu"]').first
    if menu_btn.count() > 0:
        menu_btn.click()
        time.sleep(1)
        page.screenshot(path='verification_screens/11_menu_drawer.png')
        print("11. Menu drawer captured")
        
    browser.close()

print("Targeted section screenshots completed successfully!")
