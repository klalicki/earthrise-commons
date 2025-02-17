import { HeaderMenuItem, HeaderMenu } from "@carbon/react";
import { reader } from "../../../app/(site)/reader";

const ECNavItems = () => {
  const collections = reader.collections;
  const navCollections = Object.entries(collections);

  return (
    <div></div>
    // <>
    //   {navCollections.map(async (navCollection) => {
    //     const submenuItems = await navCollection[1].all();

    //     return (
    //       <HeaderMenu menuLinkName={navCollection[0]}>
    //         {submenuItems.map((smItem) => {
    //           return (
    //             <HeaderMenuItem
    //               href={"/" + navCollection[0] + "/" + smItem.slug}
    //             >
    //               {smItem.title || smItem.name || "unknown"}
    //             </HeaderMenuItem>
    //           );
    //         })}
    //       </HeaderMenu>
    //     );
    //   })}
    // </>
  );
};

export default ECNavItems;
