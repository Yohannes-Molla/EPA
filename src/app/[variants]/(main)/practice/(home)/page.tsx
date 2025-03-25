'use client';

import {
  DraggablePanel,
  DraggablePanelBody,
  DraggablePanelContainer,
  DraggablePanelFooter,
  DraggablePanelHeader,
  Video,
} from '@lobehub/ui';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const Page = async () => {
  const [expand, setExpand] = useState(true);
  const [pin, setPin] = useState(true);
  return (
    <Flexbox
      height={'100%'}
      horizontal
      style={{ minHeight: 500, position: 'relative' }}
      width={'100%'}
    >
      <DraggablePanel
        expand={expand}
        mode={pin ? 'fixed' : 'float'}
        onExpandChange={setExpand}
        pin={pin}
        placement="left"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DraggablePanelContainer style={{ flex: 1 }}>
          <DraggablePanelHeader
            pin={pin}
            position="left"
            setExpand={setExpand}
            setPin={setPin}
            title="Header"
          />
          <DraggablePanelBody>DraggablePanel</DraggablePanelBody>
          <DraggablePanelFooter>Footer</DraggablePanelFooter>
        </DraggablePanelContainer>
      </DraggablePanel>
      <div style={{ flex: 1, padding: 24 }}>
        <Video
          autoplay={false}
          borderless={false}
          isLoading={false}
          loop={false}
          poster={'https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp'}
          src="https://github.com/lobehub/lobe-chat/assets/28616219/f29475a3-f346-4196-a435-41a6373ab9e2"
          style={{ width: 720 }}
        />
      </div>
    </Flexbox>
  );
};

Page.DisplayName = 'Practice';

export default Page;
