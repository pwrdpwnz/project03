import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';

interface Product {
    image: string;
    sale?: number;
    category: string;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
}

interface ProductsProps {
    products: Product[];
}

const SliderComponent = ({ products }: ProductsProps) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                if (currentSlide === products.length - 1) {
                    sliderRef.current.slickGoTo(0);
                    setCurrentSlide(0);
                } else {
                    sliderRef.current.slickNext();
                    setCurrentSlide(currentSlide + 1);
                }
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const onPreviousClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
            setCurrentSlide(currentSlide - 1);
        }
    };

    const onNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            setCurrentSlide(currentSlide + 1);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="product-container">
                        <img className="product-image" src={product.image} />
                    </div>
                ))}
            </Slider>
            <button className="previous-button" onClick={onPreviousClick}>
                Previous
            </button>
            <button className="next-button" onClick={onNextClick}>
                Next
            </button>
        </div>
    );
};

export default SliderComponent;