import { useState, useEffect, useCallback }  from 'react';

const UseScreenSize = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const [size, setSize] = useState({
        width,
        height,
    });

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])

    const onResize = useCallback(() => {
        // 不能直接用width, height, 因为它们第一次赋值后就不会改变
            setSize({
                width: document.documentElement.clientWidth,
                height:  document.documentElement.clientHeight,
            });
        },[])
    return [size, setSize];
}

export default UseScreenSize;
