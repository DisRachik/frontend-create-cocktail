import { socialLinksUrl } from 'constans';
import {
  Container,
  SocialLink,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from './FollowUs.styled';

export const FollowUs = () => {
  return (
    <Container>
      <SocialLink
        href={socialLinksUrl.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </SocialLink>
      <SocialLink
        href={socialLinksUrl.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </SocialLink>
      <SocialLink
        href={socialLinksUrl.youtube}
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon />
      </SocialLink>
    </Container>
  );
};
