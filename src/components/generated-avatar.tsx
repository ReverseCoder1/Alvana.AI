import { createAvatar } from '@dicebear/core';
import {botttsNeutral, initials} from '@dicebear/collection';

import { cn } from '@/lib/utils';
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';

interface GeneratedAvatarProps {
  seed?: string;
  className?: string;
  varient?: 'botttsNeutral' | 'initials';
}
export const GeneratedAvatar = ({
  seed,
  className,
  varient,
}: GeneratedAvatarProps) => {
  let avatar;
  if (varient === 'initials') {
    avatar = createAvatar(initials, {
      seed,
      fontWeight: 500,
      fontSize: 42,
    });
  } else {
    avatar = createAvatar(botttsNeutral, {
      seed,
    });
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt='Avatar'/>
      <AvatarFallback>{seed?.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};