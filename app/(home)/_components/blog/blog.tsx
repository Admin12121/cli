import "./style.css";
import Icon, { IconKey } from "@/lib/icon.utils";
import articles from "@/content/articles.json";
import GradientText from "@/components/global/gradient-text";

function IconModule({ iconKey }: { iconKey: IconKey }) {
  return Icon(iconKey);
}

const Blog = () => {
  return (
    <div className="p-10 flex flex-wrap w-full h-full items-center justify-center z-50">
      <span className="flex flex-col items-center justify-center -space-y-1 pt-20">
        <GradientText
          element="H1"
          className="text-7xl font-semibold py-1 text-center"
        >
          Recent Articles
        </GradientText>
        <h1 className="text-themeTextGray text-center text-lg">
          A personal quest to become a better creative writer.
        </h1>
      </span>
      <section className="recent_projects__AXcYQ justify-center items-center py-20 gap-8">
        {articles.map(
          ({ title, pubDate, link, author, thumbnail, categories }, index) => {
            const date = new Date(pubDate).toDateString();
            return (
              <article key={index} className="recent_project__VyX4t max-w-[370px] w-[370px] relative">
                <span className="recent_featuredImage__Y2o2N">
                  <img
                    src={thumbnail}
                    alt="Article thumbnail"
                    className="h-[300px] object-cover w-full rounded-2xl"
                  />
                </span>
                <span className="recent_header__lNEid">
                  <a href={link} rel="noreferrer" target="_blank">
                    {title}
                  </a>
                </span>
                <span className="recent_details__KFAPg text-neutral-500">
                  <p>By {author}</p>
                  <p className="recent_pushedAt__CkLBm">{date}</p>
                </span>
                <span className="recent_topicsContainer__hMVJ7">
                  {categories.map((e, index) => {
                    return (
                      <span key={index} className="recent_topics__pdXmt">
                        <IconModule iconKey="next" /> {e}
                      </span>
                    );
                  })}
                </span>
              </article>
            );
          }
        )}
      </section>
    </div>
  );
};

export default Blog;
