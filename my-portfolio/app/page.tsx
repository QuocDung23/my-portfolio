import OrbitWorld from "@/components/orbit-world";

const projectLinks = [
  { label: "Xem demo", href: "https://task-manager-tau-tawny.vercel.app/" },
  { label: "Repo frontend", href: "https://github.com/QuocDung23/Task-Manager-FE" },
  { label: "Repo backend", href: "https://github.com/QuocDung23/Manager-Task" },
];

const githubProfile = "https://github.com/QuocDung23";

export default function Home() {
  return (
    <main className="portfolio" id="top">
      <header className="site-header">
        <a className="brand" href="#intro" aria-label="Nguyễn Quốc Dũng, về đầu trang">
          <span className="brand-mark">QD</span>
          <span className="brand-name">Quốc Dũng</span>
        </a>
        <nav className="site-nav" aria-label="Điều hướng chính">
          <a href="#intro">Giới thiệu</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#taskmgr">Dự án</a>
          <a href="#contact">Liên hệ</a>
        </nav>
        <a className="header-link" href={githubProfile} target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="journey">
        <OrbitWorld />

        <div className="story">
          <section className="story-section story-section--intro" id="intro" data-scene="intro">
            <div className="story-copy story-copy--intro">
              <p className="eyebrow">Portfolio / Full-stack developer</p>
              <h1>Nguyễn Quốc<br />Dũng<span className="heading-period">.</span></h1>
              <p className="lead">Mình xây dựng ứng dụng web với React, Next.js và Express. Từ giao diện đến dữ liệu, mình thích làm mọi thứ rõ ràng và hữu ích.</p>
              <a className="button button--primary" href="#taskmgr">
                Xem dự án <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section className="story-section story-section--skills" id="skills" data-scene="skills">
            <div className="story-copy">
              <h2>Từ giao diện<br />đến dữ liệu<span className="heading-period">.</span></h2>
              <p className="section-intro">Mình làm việc trên nhiều lớp của một ứng dụng web, từ trải nghiệm người dùng đến API và cơ sở dữ liệu.</p>
              <div className="skill-groups">
                <div><span>Frontend</span><p>React, Next.js, Vue, TypeScript</p></div>
                <div><span>Backend</span><p>Express, Prisma, Docker</p></div>
                <div><span>Database</span><p>PostgreSQL, MySQL, MongoDB</p></div>
              </div>
            </div>
          </section>

          <section className="story-section story-section--project" id="taskmgr" data-scene="taskmgr">
            <div className="story-copy">
              <p className="eyebrow">Dự án nổi bật</p>
              <h2>Task<br />Manager<span className="heading-period">.</span></h2>
              <p className="section-intro">Ứng dụng quản lý dự án và công việc nhóm: kéo thả task, gán thành viên, bình luận và nhận thông báo.</p>
              <div className="project-links" aria-label="Liên kết Task Manager">
                {projectLinks.map((link, index) => (
                  <a
                    className={index === 0 ? "button button--primary" : "button button--outline"}
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section story-section--realtime" id="realtime" data-scene="realtime">
            <div className="story-copy">
              <h2>Cùng làm việc.<br />Cùng cập nhật<span className="heading-period">.</span></h2>
              <p className="section-intro">Trong Task Manager, thành viên có thể theo dõi công việc, bình luận và nhận thông báo theo thời gian thực.</p>
              <a className="text-link" href="https://github.com/QuocDung23/Manager-Task" target="_blank" rel="noopener noreferrer">
                Xem mã nguồn backend <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section className="story-section story-section--journey" id="journey" data-scene="journey">
            <div className="story-copy">
              <h2>Học để xây<br />tốt hơn<span className="heading-period">.</span></h2>
              <p className="section-intro">Mình học Kỹ thuật phần mềm tại Đại học Bách khoa Đà Nẵng và tiếp tục rèn kỹ năng qua các dự án thực tế.</p>
              <div className="study-note"><span>Trường</span><strong>Đại học Bách khoa Đà Nẵng</strong></div>
            </div>
          </section>

          <section className="story-section story-section--contact" id="contact" data-scene="contact">
            <div className="story-copy">
              <h2>Cùng tạo ra<br />điều hữu ích<span className="heading-period">.</span></h2>
              <p className="section-intro">Xem thêm mã nguồn và kết nối với mình trên GitHub.</p>
              <a className="button button--primary" href={githubProfile} target="_blank" rel="noopener noreferrer">
                GitHub của mình <span aria-hidden="true">↗</span>
              </a>
              <p className="closing-note">Nguyễn Quốc Dũng · Software developer</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
