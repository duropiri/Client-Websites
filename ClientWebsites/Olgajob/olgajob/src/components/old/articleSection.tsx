import React from "react";

const ArticleSection: React.FC = () => {
  const articles = [
    {
      title: [
        "Digital Therapeutics Decoded: A Guide to Understanding DTx and Why They're Worth Your Attention",
      ],
      description: [],
      link: "/blog/digital-therapeutics-decoded-a-guide-to-understanding-dtx-and-why-theyre-worth-your-attention",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp",
      tag: "Thought Leadership",
    },
    {
      title: ["5 Key Takeaways from the Reuters Digital Health ‘24 Summit"],
      description: [
        "The Reuters Digital Health 24 event in San Diego brought together over 300 digital leaders from across healthcare to discuss the future of digitally enabled care.",
      ],
      link: "/blog/5-key-takeaways-from-the-reuters-digital-health-24-summit",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.png",
      tag: "Thought Leadership",
    },
  ];

  return (
    <section className="flex flex-col items-center relative py-12 min-h-[100vh] overflow-hidden">
      <div className="container">
        <div className="article">
          <div className="article__left">
            <div className="article__subtitle">
              <div className="section-heading" mob-reverse="">
                <div className="section-descr">
                  <div text-descr="" className="f-18">
                    <p
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                        opacity: 1,
                      }}
                    >
                      Stay up-to-date on the latest healthcare innovations and
                      thought leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="article__bot">
              <div className="section-heading" mob-reverse="">
                <div className="section-title">
                  <h3 text-title="" className="f-64">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      {Array.from("Explore Our Insights").map((char, index) => (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: 1,
                          }}
                        >
                          {char}
                        </div>
                      ))}
                    </div>
                  </h3>
                </div>
              </div>
              <div className="article__btn" hide-mob="">
                <a
                  button-style="yellow"
                  href="/insights"
                  className="btn w-inline-block"
                >
                  <div className="btn__text--parent">
                    <div className="btn__text">
                      <div className="f-14 is--btn">
                        {Array.from("View all articles").map((char, index) => (
                          <div
                            key={index}
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="btn__icon">
                    <div className="svg w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.53848 13.7123L12.9631 6.28769M12.9631 6.28769V13.7123M12.9631 6.28769H5.53848"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="article__btn" hide-pc="">
                <a
                  button-style="yellow"
                  href="/insights"
                  className="btn w-inline-block"
                >
                  <div className="btn__text--parent">
                    <div className="btn__text">
                      <div className="f-14 is--btn">
                        {Array.from("View all articles").map((char, index) => (
                          <div
                            key={index}
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="btn__icon">
                    <div className="svg w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.53848 13.7123L12.9631 6.28769M12.9631 6.28769V13.7123M12.9631 6.28769H5.53848"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="article__wrapper w-dyn-list">
            <div role="list" className="article__list w-dyn-items">
              {articles.map((article, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="article__item w-dyn-item animating"
                >
                  <div className="article__img animating">
                    <img
                      alt={article.title.join(" ")}
                      loading="lazy"
                      src={article.img}
                      sizes="(max-width: 479px) 77vw, (max-width: 767px) 208px, 391.91845703125px"
                    />
                  </div>
                  <div className="article__content">
                    <div
                      text-descr=""
                      className="f-23"
                      style={{ textAlign: "center" }}
                    >
                      {article.title.map((line, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: "block",
                            position: "relative",
                            opacity: 1,
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                    {article.description.map((desc, idx) => (
                      <p
                        key={idx}
                        text-descr=""
                        className="f-14 is--400"
                        style={{ textAlign: "center" }}
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="article__tag animating">
                    <div className="article__tag--text">
                      <div className="f-16">
                        {Array.from(article.tag).map((char, index) => (
                          <div
                            key={index}
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform:
                                "translate(0%, -100%) translate3d(0px, 0px, 0px)",
                            }}
                          >
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    data-w-id="deed88ea-fe24-34a9-3de1-a044aa8fcd43"
                    href={article.link}
                    className="article__link w-inline-block"
                  ></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
