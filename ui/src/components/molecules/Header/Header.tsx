import { IHeaderProps } from './header.types.ts';
import { FC } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { IoChevronDownOutline } from 'react-icons/io5';

const Header: FC<IHeaderProps> = () => {
  return (
    <Box
      display={'flex'}
      backgroundColor={'white'}
      width={'100%'}
      className={'box'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box display={'flex'} alignItems={'center'} flex={1}>
        <Box>
          <Menu isLazy>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDownOutline />}
              variant={'buttonPrimary'}
              aria-label={'Sort by'}
            >
              SORT BY
            </MenuButton>
            <MenuList
              style={{
                border: '2px solid black',
                boxShadow: '3px 3px 0 0 rgba(0, 0, 0, 1)',
                fontWeight: 700
              }}
            >
              <MenuItem
                _focus={{
                  backgroundColor: 'gno.gray'
                }}
                _hover={{
                  backgroundColor: 'gno.gray'
                }}
              >
                UPVOTES
              </MenuItem>
              <MenuItem
                _focus={{
                  backgroundColor: 'gno.gray'
                }}
                _hover={{
                  backgroundColor: 'gno.gray'
                }}
              >
                DATE POSTED
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box ml={8}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDownOutline />}
              variant={'buttonPrimary'}
              aria-label={'Time'}
            >
              TIME
            </MenuButton>
            <MenuList
              style={{
                border: '2px solid black',
                boxShadow: '3px 3px 0 0 rgba(0, 0, 0, 1)',
                fontWeight: 700
              }}
            >
              <MenuItem
                _focus={{
                  backgroundColor: 'gno.gray'
                }}
                _hover={{
                  backgroundColor: 'gno.gray'
                }}
              >
                ALL TIME
              </MenuItem>
              <MenuItem
                _focus={{
                  backgroundColor: 'gno.gray'
                }}
                _hover={{
                  backgroundColor: 'gno.gray'
                }}
              >
                2 WEEKS
              </MenuItem>
              <MenuItem
                _focus={{
                  backgroundColor: 'gno.gray'
                }}
                _hover={{
                  backgroundColor: 'gno.gray'
                }}
              >
                3 MONTHS
              </MenuItem>
              <MenuItem
                _focus={{
                  backgroundColor: 'gno.gray'
                }}
                _hover={{
                  backgroundColor: 'gno.gray'
                }}
              >
                1 YEAR
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box>
        <Text fontSize={'xl'}>meme.land</Text>
      </Box>
      <Box display={'flex'} flex={1}>
        <Button variant={'buttonPrimary'} marginLeft={'auto'}>
          CONNECT WALLET
        </Button>
      </Box>
    </Box>
  );
};

export default Header;