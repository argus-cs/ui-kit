export interface ButtonProps {
    /**
     * The html button type to use.
     */
    type?: 'button'|'reset'|'submit'

    /**
     * It determines the styles that will be applied to the button.
     */
    // variant?: 'solid'|'outline'|'ghost'|'link'

    /**
     * The label to show in the button.
     */
    label: string

    /**
     * color of the button.
     */
    color?: 'default'|'primary'|'secondary'|'success'|'warning'|'danger'

    /**
     * disable the button.
     */
    disabled?: boolean
    
    /**
     * change button layout to outlined.
     */
    outline?: boolean

    // leftIcon?: string
    // rightIcon?: string

    // stylesIcon?: string
}
