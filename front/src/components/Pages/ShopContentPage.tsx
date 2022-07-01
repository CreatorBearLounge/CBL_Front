import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TitleAtom from '../Atoms/TitleAtom';
import Pagination from '../Molecules/Pagination';

const ShopContentPage: React.FC = () => {
  const location = useLocation().pathname;

  let menuTitle = '';
  let menuContent = '';

  if (location === '/shop/thesandboxasset') {
    menuTitle = 'The Sandbox Asset';
    menuContent = 'You can use our Asset for your The Sandbox works.';
  } else if (location === '/shop/specialminecraftmap') {
    menuTitle = 'Special Minecraft Map';
    menuContent =
      'Minecraft large scale maps, Minecraft maps with a scale of 200x200 or more.';
  } else if (location === '/shop/bundleandnormalminecraftmap') {
    menuTitle = 'Bundle & Normal Minecraft Map';
    menuContent =
      "Minecraft maps below 200x200, or It's a collection of individual buildings and bundles.";
  } else if (location === '/shop/epicmusic') {
    menuTitle = 'Epic Music';
    menuContent =
      "It's good for professional cinematic and music videos It's high quality music.";
  } else if (location === '/shop/soundeffectandbgm') {
    menuTitle = 'Sound Effect & BGM';
    menuContent =
      "It's sound effects and light background music. It is good for content or video production such as YouTube.";
  } else if (location === '/shop/voxelobjfile') {
    menuTitle = 'Voxel obj file';
    menuContent =
      'Voxel Art collection of 3D objects. It is recommended to produce indie games that require voxel art graphics.';
  } else if (location === '/shop/3dmodeling') {
    menuTitle = '3D Modeling';
    menuContent = 'These are just 3D modeling. It is composed of files.';
  } else if (location === '/shop/blockbenchmodeling') {
    menuTitle = 'Blockbench Modeling';
    menuContent = 'Blockbench Json modeling. It can be used in Minecraft.';
  } else if (location === '/shop/pluginandserverpack') {
    menuTitle = 'Plugin & Server Pack';
    menuContent = 'Plug-ins and server packs available in games.';
  } else if (location === '/shop/fontdesign') {
    menuTitle = 'Font Design';
    menuContent = "It's a font made by a graphic designer.";
  } else if (location === '/shop/viplounge') {
    menuTitle = 'VIP Lounge';
    menuContent =
      'This is a VIP lounge that can only be used by nft 5 or more holders.';
  }
  return (
    <>
      <TitleAtom menuTitle={menuTitle} menuContent={menuContent} />
      <ThumbnailBox>
        <Pagination menuTitle={menuTitle} />
      </ThumbnailBox>
    </>
  );
};

export default ShopContentPage;

const ThumbnailBox = styled.div`
  width: 1237px;
  height: 1230.5px;
  margin: 83px 143px 60.5px 0px;
  padding: 0 0 312.3px;
`;
