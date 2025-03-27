'use client';

import {
  ActionIcon,
  Avatar,
  Collapse,
  CollapseProps,
  DraggablePanel,
  DraggablePanelBody,
  DraggablePanelContainer,
  DraggablePanelFooter,
  DraggablePanelHeader,
  List,
  ListItemProps,
  Video,
} from '@lobehub/ui';
import { SettingsIcon } from 'lucide-react';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const { Item } = List;

interface Note {
  descriptions: string;
  id: number;
  title: string;
}

interface CourseData {
  avatar: string;
  id: number;
  notes: Note[];
  title: string;
  video: string;
}

const courseData: CourseData[] = [
  {
    avatar: '📚',
    id: 1,
    notes: [
      {
        descriptions:
          'Algebra is a branch of mathematics that deals with symbols and the rules for manipulating those symbols. It is a unifying thread of almost all mathematics and includes everything from solving simple equations to studying abstractions such as groups, rings, and fields. Algebra provides a way to represent real-world situations using equations and formulas, making it an essential tool in science, engineering, economics, and many other fields.',
        id: 1,
        title: 'What is Algebra?',
      },
      {
        descriptions:
          'Algebra is used in various real-life scenarios such as calculating interest rates, predicting profits, analyzing data, and even in computer programming. Understanding algebra allows you to develop problem-solving skills and logical thinking, which are crucial in many professions. The foundation of algebra is built on operations involving variables, constants, and expressions.',
        id: 2,
        title: 'Importance of Algebra',
      },
      {
        descriptions:
          'The basic elements of algebra include variables, coefficients, constants, expressions, and equations. Variables are symbols that represent unknown values, while coefficients are numbers that multiply variables. Constants are fixed values that do not change. Expressions are mathematical statements combining these elements, and equations are statements that show equality between two expressions.',
        id: 3,
        title: 'Basic Elements of Algebra',
      },
      {
        descriptions:
          'Understanding the fundamental operations of algebra is essential. These operations include addition, subtraction, multiplication, and division, all of which follow specific rules. The order of operations, also known as PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction), ensures that calculations are performed correctly and consistently.',
        id: 4,
        title: 'Fundamental Operations in Algebra',
      },
    ],
    title: 'What is Algebra?',
    video: 'https://example.com/video1',
  },
  {
    avatar: '✏️',
    id: 2,
    notes: [
      {
        descriptions:
          'Addition and subtraction in algebra involve combining like terms. Like terms are terms that contain the same variables raised to the same power. When adding or subtracting algebraic expressions, it is important to combine only like terms while keeping the coefficients intact. This concept helps simplify expressions and solve equations efficiently.',
        id: 1,
        title: 'Addition and Subtraction of Algebraic Expressions',
      },
      {
        descriptions:
          'A key principle in algebra is the distributive property, which allows you to expand expressions. The distributive property states that multiplying a number by a sum is the same as multiplying each addend separately and then adding the results. This property is useful in simplifying and solving equations.',
        id: 2,
        title: 'The Distributive Property',
      },
      {
        descriptions:
          'When working with algebraic expressions, it is important to recognize patterns that can help simplify calculations. These include common identities such as the difference of squares, perfect square trinomials, and the sum and difference of cubes. Mastering these patterns makes algebra easier and faster to work with.',
        id: 3,
        title: 'Recognizing Algebraic Patterns',
      },
      {
        descriptions:
          'Understanding how to rearrange and manipulate algebraic expressions is a fundamental skill in algebra. Simplifying expressions by factoring, expanding, or using common identities helps make solving equations and working with algebra more manageable. Practice is key to mastering these techniques.',
        id: 4,
        title: 'Manipulating Algebraic Expressions',
      },
    ],
    title: 'Addition and Subtraction of Algebraic Expressions',
    video: 'https://example.com/video2',
  },
  {
    avatar: '📈',
    id: 3,
    notes: [
      {
        descriptions:
          'Linear equations are equations where the highest power of the variable is one. They appear frequently in algebra and can be used to model real-world scenarios such as business costs, motion problems, and financial calculations.',
        id: 1,
        title: 'Understanding Linear Equations',
      },
      {
        descriptions:
          'Linear equations can be solved using various methods, including graphing, substitution, and elimination. Each method has its advantages depending on the problem at hand.',
        id: 2,
        title: 'Methods for Solving Linear Equations',
      },
      {
        descriptions:
          'In algebra, linear equations can be represented graphically as straight lines. The slope of the line represents the rate of change, while the y-intercept represents the point where the line crosses the y-axis.',
        id: 3,
        title: 'Graphical Representation of Linear Equations',
      },
      {
        descriptions:
          'Real-world applications of linear equations include budgeting, physics calculations, and optimization problems in various fields.',
        id: 4,
        title: 'Real-World Applications of Linear Equations',
      },
    ],
    title: 'Linear Equations',
    video: 'https://example.com/video3',
  },
  {
    avatar: '📊',
    id: 4,
    notes: [
      {
        descriptions:
          'Quadratic equations involve variables raised to the power of two. These equations are common in physics, engineering, and economics.',
        id: 1,
        title: 'Introduction to Quadratic Equations',
      },
      {
        descriptions:
          'The quadratic formula is a powerful tool used to find the roots of quadratic equations. It is derived from completing the square.',
        id: 2,
        title: 'Solving Quadratic Equations Using the Quadratic Formula',
      },
      {
        descriptions:
          'Graphing quadratic equations reveals parabolas, which can open upwards or downwards depending on the sign of the leading coefficient.',
        id: 3,
        title: 'Graphing Quadratic Equations',
      },
      {
        descriptions:
          'Quadratic equations are used in real-world problems such as calculating projectile motion, optimizing business profits, and analyzing trends in data.',
        id: 4,
        title: 'Real-World Applications of Quadratic Equations',
      },
    ],
    title: 'Quadratic Equations',
    video: 'https://example.com/video4',
  },
];

export default () => {
  const [expand, setExpand] = useState(true);
  const [pin, setPin] = useState(true);
  const [expand2, setExpand2] = useState(true);
  const [pin2, setPin2] = useState(true);

  const items: ListItemProps[] = courseData.map((data, index) => {
    return {
      // actions: <ActionIcon icon={MoreHorizontalIcon}/>,
      active: false,
      avatar: <Avatar avatar={data.avatar} />,
      // pin: true,
      showAction: false,
      title: <span style={{ fontSize: 12 }}>{'1.' + (index + 1) + ' ' + data.title}</span>,
    };
  });
  const chapters: CollapseProps['items'][] = [
    [
      {
        children: (
          <Flexbox style={{ flex: 1, overflowY: 'auto' }}>
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </Flexbox>
        ),
        extra: (
          <ActionIcon
            icon={SettingsIcon}
            // If you want to prevent the event from bubbling up,
            // you can use the stopPropagation method.
            onClick={(e) => e.stopPropagation()}
            size={{ blockSize: 24, fontSize: 16 }}
          />
        ),
        key: '1',
        label: <h5>1. Introduction to Algebraic Expressions</h5>,
      },
    ],
    [
      {
        children: (
          <Flexbox style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
            {items.map((item, index) => (
              <Item key={index} {...item} style={{ backgroundColor: 'aliceblue' }} />
            ))}
          </Flexbox>
        ),

        key: '2',
        label: <h5>2. Exponential and Logarithmic Functions</h5>,
      },
    ],
    [
      {
        children: (
          <Flexbox style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </Flexbox>
        ),
        key: '3',
        label: <h5>3. Trigonometric Functions</h5>,
      },
    ],
  ];
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
        // size={{width: '560px'}}
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
          <DraggablePanelBody>
            {/*{*/}
            {/*   chapters.map((chapter, index) => {*/}
            {/*     if(index === 0) {*/}
            {/*       return (<Collapse defaultActiveKey={1} items={chapter} key={index} style={{marginBottom: '10px'}}/>)*/}
            {/*     }*/}
            {/*     return (<Collapse items = {chapter} key={index} style={{marginBottom: '10px'}}/>)*/}
            {/*   })*/}
            {/* }*/}
          </DraggablePanelBody>
          <DraggablePanelFooter>Footer</DraggablePanelFooter>
        </DraggablePanelContainer>
      </DraggablePanel>
      <div style={{ flex: 1, padding: 24 }}>
        <Video
          autoplay={false}
          borderless={false}
          isLoading={false}
          loop={false}
          // poster={'https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp'}
          size={800}
          src="https://github.com/lobehub/lobe-chat/assets/28616219/f29475a3-f346-4196-a435-41a6373ab9e2"
        />
      </div>
      <DraggablePanel
        expand={expand2}
        mode={pin2 ? 'fixed' : 'float'}
        onExpandChange={setExpand2}
        pin={pin2}
        placement="right"
        // size={{ width: '560px' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DraggablePanelContainer style={{ flex: 1 }}>
          <DraggablePanelHeader
            pin={pin2}
            position="right"
            setExpand={setExpand2}
            setPin={setPin2}
            title="Header"
          />
          <DraggablePanelBody>
            {chapters.map((chapter, index) => {
              if (index === 0) {
                return (
                  <Collapse
                    defaultActiveKey={1}
                    items={chapter}
                    key={index}
                    style={{ marginBottom: '10px' }}
                  />
                );
              }
              return <Collapse items={chapter} key={index} style={{ marginBottom: '10px' }} />;
            })}
          </DraggablePanelBody>
          <DraggablePanelFooter>Footer</DraggablePanelFooter>
        </DraggablePanelContainer>
      </DraggablePanel>
    </Flexbox>
  );
};
