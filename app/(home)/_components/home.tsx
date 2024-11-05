import { Button } from "@/components/costum/button";
import {
  WordPullUpBlur,
  SequentialAnimator,
} from "@/components/global/text-animation";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="LayoutContent_root__ZBUya">
      <SequentialAnimator
        elements={[
          {
            element: (
              <WordPullUpBlur
                className="typography_h1__b6szR hidden lg:block"
                words="DevX is the ultimate tool to\nboost your development **workflow**"
              />
            ),
            group: 0,
          },
          {
            element: (
              <WordPullUpBlur
                className="typography_h1__b6szR flex items-center justify-center text-center lg:hidden flex-wrap"
                words="Build Faster, Build Better"
              />
            ),
            group: 0,
          },
          { element: <div className="Spacer_root__uoSvA"></div>, group: 1 },
          {
            element: (
              <div className="hidden lg:block">
                <h2 className="sc-97c56cdb-0 kogGNX Hero_heroSubtitle__ugVER text-themeTextGray text-xl font-medium w-1/2">
                  Streamline your development with an all-in-one setup:<br/>UI components, state management, auth, and database.
                </h2>
              </div>
            ),
            group: 2,
          },
          {
            element: (
              <div className="block lg:hidden">
                <div className="Flex_root__DOQCW Flex_center__qqy7h text-center justify-center">
                  <h2 className="sc-97c56cdb-0 eZcAXw Hero_heroSubtitle__ugVER">
                      A streamlined foundation for developers to focus on building, not setting up.
                  </h2>
                </div>
              </div>
            ),
            group: 2,
          },
          { element: <div className="Spacer_root__uoSvA"></div>, group: 3 },
          {
            element: (
              <div className="show-mobile">
                <div
                  className="flex items-center lg:justify-start justify-center"
                  style={{ gap: "16px" }}
                >
                  <div>
                    <Button asChild className="rounded-xl">
                      <Link type="button" href="/docs">
                        Start building
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ),
            group: 4,
          },
        ]}
        duration={1}
        delayBetween={0.3}
      />
    </div>
  );
};
export default Hero;