import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function BounceObject() {
    const refs = useRef([]);
    const finalPositions = [0, -5, -5, 0, -8];
    const triggerRef = useRef();

    const playBounce = () => {
        refs.current.forEach((el, i) => {
        const yTarget = finalPositions[i];

        const tl = gsap.timeline({ delay: Math.random() * 0.6 });

        tl.fromTo(
            el,
            { y: -200, opacity: 0 },
            {
            y: yTarget + 15,
            opacity: 1,
            duration: 0.5,
            ease: 'power4.in',
            }
        );

        tl.to(el, {
            y: yTarget,
            duration: 0.4,
            ease: 'bounce.out',
        });
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            playBounce();
            }
        },
        { threshold: 0.5 }
        );

        if (triggerRef.current) observer.observe(triggerRef.current);

        return () => observer.disconnect();
    }, []);

    const svgs = Array.from({ length: 5 }, (_, i) => `/img/main_object_${i + 1}.svg`);

    return (
        <>
        <div ref={triggerRef} style={{ height: '1px' }} />
        <div className="bounce_wrapper">
            {svgs.map((src, idx) => (
            <img
                key={idx}
                ref={el => (refs.current[idx] = el)}
                src={src}
                className="bounce_object"
                style={{ zIndex: Math.floor(Math.random() * 10) }}
            />
            ))}
        </div>
        </>
    );
}

export default BounceObject;
