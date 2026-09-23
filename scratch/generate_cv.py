import os

def create_cv_pdf(output_path):
    # Page size: A4 = 595.28 x 841.89 points
    W, H = 595.28, 841.89
    
    stream_ops = []
    
    # Helper to add stream commands
    def op(cmd):
        stream_ops.append(cmd)
    
    # Background subtle tint or clean white
    op("1 1 1 rg")
    op(f"0 0 {W} {H} re f")
    
    # Top header accent bar (Deep blue accent #2563EB = 0.145, 0.388, 0.922)
    op("0.145 0.388 0.922 rg")
    op(f"0 {H - 8} {W} 8 re f")
    
    # Text helper
    def text(font, size, x, y, string, r=0.1, g=0.1, b=0.1):
        # Escape parenthesis and backslashes in PDF string
        escaped = string.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        op(f"{r:.3f} {g:.3f} {b:.3f} rg")
        op("BT")
        op(f"/{font} {size} Tf")
        op(f"{x:.2f} {y:.2f} Td")
        op(f"({escaped}) Tj")
        op("ET")
        
    def line(x1, y1, x2, y2, r=0.8, g=0.8, b=0.8, width=0.75):
        op(f"{r:.3f} {g:.3f} {b:.3f} RG")
        op(f"{width} w")
        op(f"{x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    # Header
    # Name
    text("F2", 24, 50, 770, "BAGUS KURNIAWAN", 0.05, 0.05, 0.08)
    # Role
    text("F2", 11, 50, 752, "SOFTWARE ENGINEER  |  BACKEND & CLOUD FOCUS", 0.145, 0.388, 0.922)
    # Contact Row
    contact_info = "Email: gedebagusk@gmail.com   |   GitHub: github.com/kurngxtech   |   Portfolio: kurngxtech.dev   |   Indonesia"
    text("F1", 9, 50, 736, contact_info, 0.35, 0.35, 0.40)
    
    # Divider
    line(50, 724, W - 50, 724, 0.85, 0.85, 0.88, 1.0)
    
    y = 702
    
    def section_heading(title, curr_y):
        text("F2", 11, 50, curr_y, title.upper(), 0.145, 0.388, 0.922)
        line(50, curr_y - 4, W - 50, curr_y - 4, 0.88, 0.90, 0.94, 0.75)
        return curr_y - 18
        
    # SUMMARY
    y = section_heading("Professional Summary", y)
    summary_lines = [
        "Software Engineer with a solid foundation in Information Systems and verified client-facing production delivery experience.",
        "Specializes in building reliable full-stack web applications, RESTful APIs, and relational database systems with PostgreSQL.",
        "Demonstrated hands-on experience deploying containerized services with Docker, implementing Row-Level Security (RLS), and",
        "authoring end-to-end automated tests with Playwright. Dedicated to clean architecture, security, and cloud scalability."
    ]
    for sl in summary_lines:
        text("F1", 9, 50, y, sl, 0.2, 0.2, 0.25)
        y -= 13
    y -= 8

    # WORK EXPERIENCE
    y = section_heading("Work Experience & Production Delivery", y)
    
    # Job 1: Saint Ink Tattoo
    text("F2", 10.5, 50, y, "Full-Stack Software Engineer (Internship / Client Project)", 0.08, 0.08, 0.1)
    text("F1", 9, W - 145, y, "June 2025 - Present", 0.4, 0.4, 0.45)
    y -= 13
    text("F3", 9, 50, y, "Saint Ink Tattoo Studio  |  Production Client Deployment", 0.145, 0.388, 0.922)
    y -= 14
    
    job1_bullets = [
        "Engineered end-to-end booking and artist showcase web application using React, TypeScript, Tailwind CSS, and Supabase.",
        "Designed and implemented PostgreSQL relational schemas with Row-Level Security (RLS) policies for multi-tenant data isolation.",
        "Built automated End-to-End (E2E) testing suites using Playwright, verifying critical appointment scheduling workflows.",
        "Containerized frontend and backend services using Docker, ensuring reproducible staging and production environments.",
        "Optimized client-side rendering and asset delivery, cutting initial page load time by 35% across mobile networks."
    ]
    for b in job1_bullets:
        text("F2", 9, 55, y, "-", 0.145, 0.388, 0.922)
        text("F1", 8.8, 65, y, b, 0.22, 0.22, 0.26)
        y -= 13
    y -= 8

    # SELECTED PROJECTS
    y = section_heading("Key Technical Projects", y)
    
    # Project 1: Cinema Ticketing
    text("F2", 10, 50, y, "Cinema Ticketing System", 0.08, 0.08, 0.1)
    text("F1", 8.5, W - 195, y, "Stack: TypeScript, Node.js, PostgreSQL", 0.4, 0.4, 0.45)
    y -= 12
    proj1_bullets = [
        "Architected a scalable seat reservation platform with transactional booking handling to prevent double-booking conflicts.",
        "Implemented secure JWT authentication and role-based access control (RBAC) for cinema managers and customers."
    ]
    for b in proj1_bullets:
        text("F2", 8.5, 55, y, "-", 0.145, 0.388, 0.922)
        text("F1", 8.5, 65, y, b, 0.22, 0.22, 0.26)
        y -= 12
    y -= 4

    # Project 2: SmartWaste IoT
    text("F2", 10, 50, y, "SmartWaste IoT & Real-time Monitoring Dashboard", 0.08, 0.08, 0.1)
    text("F1", 8.5, W - 195, y, "Stack: IoT Sensors, Python, Web Dashboard", 0.4, 0.4, 0.45)
    y -= 12
    proj2_bullets = [
        "Built an IoT telemetry pipeline collecting fill-level and sensor metrics, aggregating real-time analytics on a web dashboard.",
        "Designed threshold-based notification alerts to optimize municipal waste pickup routes and reduce fuel expenditure."
    ]
    for b in proj2_bullets:
        text("F2", 8.5, 55, y, "-", 0.145, 0.388, 0.922)
        text("F1", 8.5, 65, y, b, 0.22, 0.22, 0.26)
        y -= 12
    y -= 4

    # Project 3: Android Health Tracking
    text("F2", 10, 50, y, "Android Health & Activity Tracking Application", 0.08, 0.08, 0.1)
    text("F1", 8.5, W - 195, y, "Stack: Kotlin, Android SDK, SQLite", 0.4, 0.4, 0.45)
    y -= 12
    proj3_bullets = [
        "Developed native Android application for monitoring daily fitness activities with local persistence and background telemetry.",
        "Implemented clean MVVM architecture ensuring robust testability and responsive UI state management."
    ]
    for b in proj3_bullets:
        text("F2", 8.5, 55, y, "-", 0.145, 0.388, 0.922)
        text("F1", 8.5, 65, y, b, 0.22, 0.22, 0.26)
        y -= 12
    y -= 8

    # EDUCATION
    y = section_heading("Education", y)
    text("F2", 10, 50, y, "Bachelor of Information Systems", 0.08, 0.08, 0.1)
    text("F1", 9, W - 150, y, "Expected Graduation: 2026", 0.4, 0.4, 0.45)
    y -= 13
    text("F1", 8.8, 50, y, "Cumulative GPA: 3.82 / 4.00   |   Focus: Software Engineering, Database Systems, Computer Networks", 0.25, 0.25, 0.3)
    y -= 18

    # TECHNICAL SKILLS
    y = section_heading("Technical Skills & Competencies", y)
    skills = [
        ("Languages & Core", "TypeScript, JavaScript (ESNext), Python, SQL, HTML5, CSS3 / Modern Tailwind CSS"),
        ("Backend & Frameworks", "Node.js, Express, React, Vite, Astro, RESTful API Design, Microservices Concepts"),
        ("Databases & Storage", "PostgreSQL, Supabase, Row-Level Security (RLS), Schema Migrations, Redis Caching"),
        ("DevOps & Infrastructure", "Docker, Containerization, Git, GitHub Actions CI/CD, Linux Server Administration"),
        ("Testing & Quality", "Playwright (E2E Automated Testing), Unit Testing, Lighthouse Performance Auditing")
    ]
    for cat, items in skills:
        text("F2", 8.8, 50, y, f"{cat}:", 0.145, 0.388, 0.922)
        text("F1", 8.8, 165, y, items, 0.2, 0.2, 0.25)
        y -= 13

    # Footer note
    y = 35
    line(50, y + 12, W - 50, y + 12, 0.88, 0.88, 0.90, 0.5)
    text("F1", 7.5, 50, y, "Bagus Kurniawan - Curriculum Vitae | Verified Technical Portfolio: https://kurngxtech.dev", 0.5, 0.5, 0.55)
    text("F1", 7.5, W - 110, y, "Last Updated: 2026", 0.5, 0.5, 0.55)

    stream_data = "\n".join(stream_ops).encode("latin1")
    
    # PDF Objects
    objects = []
    
    # 1: Catalog
    objects.append(b"<</Type/Catalog/Pages 2 0 R>>")
    # 2: Pages
    objects.append(b"<</Type/Pages/Kids[3 0 R]/Count 1>>")
    # 3: Page
    page_obj = f"<</Type/Page/Parent 2 0 R/MediaBox[0 0 {W} {H}]/Resources<</Font<</F1 5 0 R/F2 6 0 R/F3 7 0 R>>>>/Contents 4 0 R>>"
    objects.append(page_obj.encode("latin1"))
    # 4: Stream
    objects.append(f"<</Length {len(stream_data)}>>\nstream\n".encode("latin1") + stream_data + b"\nendstream")
    # 5: Font Helvetica (Regular)
    objects.append(b"<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>")
    # 6: Font Helvetica-Bold
    objects.append(b"<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold/Encoding/WinAnsiEncoding>>")
    # 7: Font Helvetica-Oblique
    objects.append(b"<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Oblique/Encoding/WinAnsiEncoding>>")
    
    # Write PDF file with xref table
    with open(output_path, "wb") as f:
        f.write(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = []
        for i, obj in enumerate(objects):
            offsets.append(f.tell())
            f.write(f"{i + 1} 0 obj\n".encode("latin1"))
            if isinstance(obj, str):
                f.write(obj.encode("latin1"))
            else:
                f.write(obj)
            f.write(b"\nendobj\n")
            
        xref_offset = f.tell()
        f.write(f"xref\n0 {len(objects) + 1}\n".encode("latin1"))
        f.write(b"0000000000 65535 f \n")
        for off in offsets:
            f.write(f"{off:010d} 00000 n \n".encode("latin1"))
            
        f.write(f"trailer\n<</Size {len(objects) + 1}/Root 1 0 R>>\nstartxref\n{xref_offset}\n%%EOF\n".encode("latin1"))

if __name__ == "__main__":
    out = os.path.join("public", "Bagus_Kurniawan_CV.pdf")
    create_cv_pdf(out)
    print(f"Generated {out} (size: {os.path.getsize(out)} bytes)")
