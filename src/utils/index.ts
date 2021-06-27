export const getBreakpointValue = (props: string|undefined, breakpoint?: string) => {

    let result: string | undefined = undefined;

    props &&
        props.split(/\s*;\s*/)
            .forEach(item => {
                if(!breakpoint && !item.match(/(.*?):(.*?)/)) {

                    return result = item;

                } else if(breakpoint && item.match(/(.*?):(.*?)/)) {

                    const values =item.split(':');

                    if(values[0] == breakpoint) {
                        return result = values[1];
                    }
                }
            });

    return result;
}
