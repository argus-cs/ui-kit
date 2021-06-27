import { themeSchema } from '../../theme';

export interface TextProps {
    
    as: 'p'|'span'|'strong'|'small'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6';

    color?: keyof typeof themeSchema.pallete;
    
    isSelectable?: boolean;
}
