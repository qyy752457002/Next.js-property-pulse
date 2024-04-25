import InfoBox from "./infoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

          {/* 
              InfoBox 组件右边有一个闭合标签，因为它接受了 children 作为 props。
              这使得你可以在 InfoBox 组件中包含其他内容，而不仅仅是 heading 和 buttonInfo。
          */}
          <InfoBox
            heading="For Renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

           {/* 
              InfoBox 组件右边有一个闭合标签，因为它接受了 children 作为 props。
              这使得你可以在 InfoBox 组件中包含其他内容，而不仅仅是 heading 和 buttonInfo。
          */}
          <InfoBox
            heading="For Propery Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            Find your dream rental property. Bookmark properties and contact owners.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
