import { socialLinksUrl } from 'constans';
import {
  List,
  Item,
  Link,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from './FollowUs.styled';

export const FollowUs = () => {
  return (
    <div>
      <List>
        <Item>
          <Link
            href={socialLinksUrl.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
        </Item>

        <Item>
          <Link
            href={socialLinksUrl.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
        </Item>

        <Item>
          <Link
            href={socialLinksUrl.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </Link>
        </Item>
      </List>
    </div>
  );
};
