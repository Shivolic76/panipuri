import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    date: "March 15, 2024",
    category: "Company News",
    title: "RudraDhara Wins Best Developer Award at Surat Real Estate Summit 2024",
    excerpt:
      "We are proud to announce that RudraDhara Developers has been honoured with the prestigious Best Residential Developer award at the annual Surat Real Estate Summit, recognising our commitment to quality and timely delivery.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 2,
    date: "January 8, 2024",
    category: "Construction",
    title: "Dhruv Park Residency Achieves Structural Completion — Possession Soon",
    excerpt:
      "The main structural work for Dhruv Park Residency is now complete. Interior finishes, electrical work, and landscaping are in the final stages. Possession for all registered buyers is expected within the next 60 days.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    id: 3,
    date: "November 22, 2023",
    category: "Announcement",
    title: "Balaji Residency Pre-Launch — Register Your Interest Today",
    excerpt:
      "We're thrilled to announce the pre-launch of Balaji Residency, our most ambitious project to date. Located near the Eklara Check Post in Karadva, this G+8 development will feature 1, 2 & 3 BHK homes with premium amenities.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24" style={{ background: "var(--light-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-number">08 — News & Updates</span>
            <div className="divider-accent" />
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Latest from RudraDhara
            </h2>
          </div>
          <a href="#news" className="btn-outline self-start md:self-auto">
            View All News
          </a>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-hover bg-white overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-wide px-2 py-0.5"
                    style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                    <Calendar size={11} />
                    {post.date}
                  </span>
                </div>

                <h3
                  className="font-bold text-base mb-3 leading-snug"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                >
                  {post.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                  {post.excerpt}
                </p>

                <a
                  href="#news"
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide"
                  style={{ color: "var(--accent)" }}
                >
                  Read More <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
