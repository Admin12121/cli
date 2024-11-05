import FeatureNine from "@/components/global/feature";
import content from "@/content/projects/projects.json";
import GradientText from "@/components/global/gradient-text";

const Feature = () => {
  return (
    <div className="p-5 flex flex-wrap w-full h-full items-center justify-center page_sectionWhatMakesLinearDifferent__qjbK2">
      <span className="flex flex-col items-center justify-center -space-y-1">
        <p className="text-base space-y-0 text-themeTextGray">Full stack</p>
        <GradientText element="H1" className="text-6xl font-semibold py-1 text-center">
          Featured Projects
        </GradientText>
        <h1 className="text-themeTextGray text-center">Focused on the experience, driven by the engineering.</h1>
      </span>
      <FeatureNine products={content} />
    </div>
  );
};

export default Feature;
