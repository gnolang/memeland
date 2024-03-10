import { IHomeProps } from './home.types.ts';
import { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Image,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { TbArrowBigUpFilled } from 'react-icons/tb';
import Header from '../../molecules/Header/Header.tsx';
import Footer from '../../molecules/Footer/Footer.tsx';

const Home: FC<IHomeProps> = () => {
  interface IPost {
    id: string;
    image: string;
    author: string;
    date: Date;
    upvotes: number;
  }

  const [isMdOrSmaller] = useMediaQuery('(max-width: 62em)');

  const constructImageSrc = (data: string): string => {
    return `data:image/png;base64,${data}`;
  };

  const posts: IPost[] = [
    {
      id: '1',
      image:
        'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAANIElEQVR4nOzX/dfQdX3H8YjLu2CZ2lyMO7MpyuVGhckOmsea4mUTNcnlyY6tJR2n0ymSeUzdkLUrUjob4hLZjZiYt508uo01K+8SjscdRLOmDBzDED3cFAsGMtj+itc5nfN6PP6A1+eX7znP73tg4pgH35H0lYc2RPfH3rIyuj9pzJPR/YcuvS26v/lL26P7s/9rOLp/4dZp0f0V+0ZF99ce99/R/Yk/vDK6v3/5ddH9CZ/7WXT/0ks/HN0ftX5BdH/o1MnR/XdG1wH4lSUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoNfHbKr0cfeGzNK9H9ux67Prr/l9e8Ed0/+eczovtbp02M7j86eXN0f+m8KdH9JcumRvfvOng4ur9u1t9H9//s8F9E90988Pno/tD3L4vu73vqG9H9dz/2UHTfBQBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBq4e84l2RfWnBid3zjzhuj+6sHbo/uz7lkV3T/klX3R/THLz4nuv33KUHT/pr3PRfffOvFj0f3BWy6P7o/bvyS6v331b0T3Nz/yanT/ioO2Rfc3jD88uu8CACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKDdwy5+zoA6/+1vTo/pKnPhLdv3fG16P7Zxz/QHT/xhGnRfc3vHxCdP+PD/xGdP/CZ94V3b9p/q7o/prZT0f3L3776Oj++7ffFN2/YM7e6P7ca9dE959f/aHovgsAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACg1Yt7ao6IPLPrrM6L7Gw9bGN0fvmtPdH/yO9ZG9w98/IHo/j/9+c3R/QlzJkT3X7/i+Oj+AfeeFd1fO+b26P7543ZF9++Y8HR0/8pvvxbdP/LrN0b3h3/2j9F9FwBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUGpg/cy/ij5w+3dnRfc/edPl0f3hJ343uv+ZT66K7n/x4zui+3tePSS6/6FHXo3uX/bs2dH9rxx4UXR/y7rV0f0Zd0+N7l/35rTo/nufvDq6f9Jhi6L79x++JbrvAgAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASo34wcaPRB/46mmnRPe/N+8X0f1Jp90W3X925K3R/fO+szu6f//qpdH9RXvOiO5/7IFzovuDy8ZG9yfvWhzdX/TTF6P7cxecGd3/wDlfi+6ffd6q6P7Dd2S/HxcAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBqxPG710YfuOPMO6P7ix6aGN2fMvPo6P7A6H+J7n9h/Njo/uwlB0X3J313VnT/pT88P7q/av950f1zn/mL6P7jm74Z3b/skKnR/ft3nRLdf+mGedH9sTfcF913AQCUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApUa8cO3How/cO25fdP+oJ3dG9z8xe2x0f9SJP4ruP/LY/0b3hx74XnR/+8Wjo/tTRx8Z3T/p8gXR/fc+eUJ0/wN7vxXdf+eLD0f3j/jJf0b3hx4/Nbq/6cvZ798FAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUGhh/8G9GH/i3OxdG9z943Pbo/uAXFkf3T/79P43ur5g3Orp/7tJ/je7/csKy6P5TZ/04uv++Y38nun/optei++9bcGN0f8WkL0X3Fx4+Jrp/8lufje7v+PER0X0XAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQauCeWwejD7zn21Oi+1tGb4vubzh0cnT/pFP+J7r/0Qk/ie6/MfuY6P7X7h4Z3V8w9r7o/uh7R0X3fzry6Oj+0uOviu5fsHhmdP/Qq/8gur/kb6+I7k9/+p+j+y4AgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKDUwMShI6IP7Lx8a3R/eOSO6P78M4+K7i/7/rHR/fsOPjC6P3f9w9H9yy4eGd3/o2NPj+5P//zc6P7S+edF93/46LTo/jMH/EN0f+nru6P77994W3R//Rs/iO67AABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUiOWP3NM9IHN80+P7r81aVx0/9duXh3d//zgp6P747+8Jbp/7sQ90f0Vi86M7r/7b16O7v/f1inR/VvevDq6/x/fvC66f+tzd0b3r79rZHT/zZPPiu4/t/yq6L4LAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoNTD0yznRB7444VPR/fds+1x0/9OXPB/dv+jDZ0X3P3XI6Oj+mpn/Ht3fNOm+6P7OZZdE94fPvzC6f8DexdH9Z9dtiO6vmzE9un/V29ui+4suyv5Dz7phfnTfBQBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBp4fMzR0QeunjE3un/M1Gui+5949PTo/tyVQ9H9G2+/KLq/7V37o/vfGpX9R3lxcEp0/6vTnojuH3TlYHT/2ufnRfcX/2hldH/FC2Oj+wcc83J0/+92vx7ddwEAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUGvrN1OPrAw4e9Ft2/+Z6F0f0XNm6O7p/2wenR/WvGHRndv3DVCdH9HTsnR/cf/O3fi+4/cdzi6P5LF1wf3V+5/0+i+6fuWh7d/+i6V6L7Pz99ZXT/MwvHR/ddAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAqf8PAAD//8pHeuAQR6qEAAAAAElFTkSuQmCC',
      author: 'moul',
      date: new Date(),
      upvotes: 341
    },
    {
      id: '2',
      image:
        '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AKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAqaHdU/4n+sDqHedF9597bTS6f8rQvuj+PWfsiO4fd9EV0f2tE/87uv/07Q9H92d86fzo/m++uj66f9Qt46L7xw+mR/enXv+N6P74h+6O7u+ccnB0/5+HV0T3XQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQKmhmw5cE33g706dH93/wElfj+6fPfc/ovvbFz8b3f/kh66M7j9x4s+j+2uOfDK6f82bw9H9TT+ZE92/eec50f3lC7O//6umfD+6f8or06L7Hzp8RXT/ipO2RPddAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAqcHHF382+sDhp++P7k9ZNCu6f+joguj+noemRvcvuz/7/33/4kOi+w9/8SvR/UknbYvuDy+4MLr/6L5N0f2xi46O7u++5Jbo/o/27oruP3rp09H94x9cEd13AQCUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApf4/AAD//5F3fayaOZhlAAAAAElFTkSuQmCC',
      author: 'milos',
      date: new Date(),
      upvotes: 99
    },
    {
      id: '3',
      image:
        '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',
      author: 'g15hrw6y9w...057l79zy7vu5',
      date: new Date(),
      upvotes: 10
    }
  ];

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      minHeight={'100vh'}
    >
      <Box mx={10} mt={5}>
        <Header />
      </Box>
      <Container
        display={'flex'}
        flexDirection={'column'}
        maxW={isMdOrSmaller ? '100vw' : '95vw'}
        mt={20}
        width={'100%'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          marginLeft={'auto'}
          marginRight={'auto'}
          mt={-20}
        >
          {posts.map((post: IPost, index: number) => {
            return (
              <Box
                key={index}
                className={'box'}
                backgroundColor={'white'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                width={'600px'}
                mt={20}
              >
                <Image
                  objectFit="cover"
                  src={constructImageSrc(post.image)}
                  alt="Meme"
                  loading={'lazy'}
                  boxSize={'500px'}
                />
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  mt={4}
                  width={'500px'}
                >
                  <Button
                    variant={'buttonPrimary'}
                    leftIcon={<TbArrowBigUpFilled />}
                  >
                    {`UPVOTE (${post.upvotes})`}
                  </Button>
                  <Box
                    ml={4}
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'right'}
                  >
                    <Text>{post.author}</Text>
                    <Text>{post.date.toDateString()}</Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
          <Box mx={'auto'} mt={20}>
            <Button variant={'buttonPrimary'}>LOAD MORE</Button>
          </Box>
        </Box>
      </Container>
      <Box display={'flex'} mb={5} mt={20} justifyContent={'center'}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
