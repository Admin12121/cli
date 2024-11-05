import css from "./style.module.css";
import Badges from "./badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Project = ({ data }: { data: any }) => {
  const { project, repo, descriptionTitle, description, stack, images } = data;

  return (
    <div className="bg-[#08090a]  h-[450px] rounded-[30px] aspect-[336/360] w-[420px] p-[32px 28px]">
      <div className={`${css.details} h-full w-full`}>
        <div
          className={`${css.projectHeader} relative flex justify-between h-full`}
        >
          <div className={css.header}>
            <h3 className="highlight !font-bold">{project}</h3>
            <span className={css.privateOr}>
              <GitHubLogoIcon />
              {repo}
            </span>
          </div>
          <div className="relative flex flex-col gap-2 z-20">
            <p className="font-sans text-zinc-500">
              <strong className="font-medium">{descriptionTitle}</strong>{" "}
              {description}
            </p>
            <div className={` ${css.stackContainer}`}>
              <Badges list={stack} block="stack" fullContainer="false" />
            </div>
          </div>
          <div className={" w-full flex h-full z-10 top-5"}>
            <span className={`relative w-full h-full flex`}>
              {images.map(
                (
                  {
                    url,
                  }: {
                    key: any;
                    url: string;
                    hover: any;
                    h: number;
                    w: number;
                  },
                  index: number
                ) => {
                  return (
                    <img
                      key={index}
                      src={url}
                      alt="x"
                      className="!flex absolute"
                    />
                  );
                }
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
