"use client";
import Image from "next/image";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [selectedImage, setSelectedImage] = React.useState(
    "/images/chachacha/item5.jpg"
  );
  const images = [
    "/images/chachacha/item5.jpg",
    "/images/chachacha/item6.jpg",
    "/images/chachacha/item7.jpg",
    "/images/chachacha/item8.jpg",
    "/images/chachacha/item9.jpg",
    "/images/chachacha/item10.jpg",
  ];
  return (
    <section className="flex flex-col xl:flex-row items-start justify-center w-full h-auto  border-t">
      {/* Left/Top Content */}
      <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
        <div className="relative flex flex-col items-center justify-center w-full min-w-[50vw] min-h-[100vw] md:min-h-[738px] overflow-hidden">
          <Image
            src={selectedImage}
            alt="Selected gallery image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-row items-start justify-start w-full h-full gap-5 p-5 overflow-x-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center min-w-[122px] h-[117px] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right/Bottom Content */}
      <div className="relative flex flex-col items-start justify-start w-full xl:w-[50vw] h-full">
        <div className="flex flex-col items-start justify-center max-w-[100vw] xl:w-[555px] h-full py-6 xl:px-0 px-8 w-full xl:mx-12 mx-auto">
          <div className="flex flex-col items-center xl:items-start justify-center w-full">
            <h2 className="text-4xl text-center xl:text-start max-w-[18ch] xl:max-w-[20ch] font-bold">
              Organize with Style: Multi-Function Storage Unit
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start xl:justify-start justify-center w-full h-full gap-4 mt-6">
              <div className="flex flex-row">
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden">
                  <Image
                    src="/images/rating1.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating2.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating3.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating4.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating5.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-between h-full">
                <svg
                  width="106"
                  height="17"
                  viewBox="0 0 106 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0504 1.44352L11.8559 5.10187C11.9949 5.38348 12.2638 5.57894 12.5745 5.62385L16.6119 6.21051C17.3945 6.32433 17.7072 7.28638 17.1409 7.83857L14.2195 10.6863C13.9946 10.9055 13.8918 11.2215 13.9449 11.5311L14.6347 15.5521C14.7683 16.3317 13.95 16.9263 13.2498 16.5582L9.63863 14.6599C9.36069 14.5138 9.02853 14.5138 8.75031 14.6599L5.13941 16.5582C4.43921 16.9263 3.62094 16.3317 3.75454 15.5521L4.44429 11.5311C4.49739 11.2215 4.39486 10.9055 4.16975 10.6863L1.24832 7.83857C0.681716 7.28638 0.994393 6.32433 1.77736 6.21051L5.81476 5.62385C6.12574 5.57866 6.39436 5.38348 6.53333 5.10187L8.33877 1.44352C8.68902 0.733996 9.70049 0.733996 10.0504 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.9638 1.44352L33.7693 5.10187C33.9082 5.38348 34.1771 5.57894 34.4878 5.62385L38.5252 6.21051C39.3079 6.32433 39.6206 7.28638 39.0543 7.83857L36.1329 10.6863C35.908 10.9055 35.8052 11.2215 35.8583 11.5311L36.5481 15.5521C36.6817 16.3317 35.8634 16.9263 35.1632 16.5582L31.552 14.6599C31.2741 14.5138 30.9416 14.5138 30.6637 14.6599L27.0525 16.5582C26.3523 16.9263 25.534 16.3317 25.6676 15.5521L26.3574 11.5311C26.4105 11.2215 26.3077 10.9055 26.0828 10.6863L23.1614 7.83857C22.5951 7.28638 22.9075 6.32433 23.6905 6.21051L27.7279 5.62385C28.0388 5.57866 28.3075 5.38348 28.4464 5.10187L30.2519 1.44352C30.6021 0.733996 31.6136 0.733996 31.9638 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M53.8769 1.44352L55.6827 5.10187C55.8216 5.38348 56.0905 5.57894 56.4012 5.62385L60.4386 6.21051C61.2213 6.32433 61.534 7.28638 60.9677 7.83857L58.0462 10.6863C57.8214 10.9055 57.7186 11.2215 57.7717 11.5311L58.4614 15.5521C58.595 16.3317 57.7768 16.9263 57.0766 16.5582L53.4654 14.6599C53.1875 14.5138 52.855 14.5138 52.5771 14.6599L48.9659 16.5582C48.2657 16.9263 47.4474 16.3317 47.581 15.5521L48.2708 11.5311C48.3239 11.2215 48.2213 10.9055 47.9962 10.6863L45.0748 7.83857C44.5082 7.28638 44.8209 6.32433 45.6038 6.21051L49.6412 5.62385C49.9522 5.57866 50.2208 5.38348 50.3598 5.10187L52.1653 1.44352C52.5152 0.733996 53.527 0.733996 53.8769 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M75.79 1.44352L77.5955 5.10187C77.7344 5.38348 78.0033 5.57894 78.314 5.62385L82.3514 6.21051C83.1341 6.32433 83.4468 7.28638 82.8805 7.83857L79.9591 10.6863C79.7342 10.9055 79.6314 11.2215 79.6845 11.5311L80.3743 15.5521C80.5079 16.3317 79.6896 16.9263 78.9894 16.5582L75.3782 14.6599C75.1003 14.5138 74.7678 14.5138 74.4899 14.6599L70.8787 16.5582C70.1785 16.9263 69.3602 16.3317 69.4938 15.5521L70.1836 11.5311C70.2367 11.2215 70.1339 10.9055 69.909 10.6863L66.9876 7.83857C66.421 7.28638 66.7337 6.32433 67.5167 6.21051L71.5541 5.62385C71.865 5.57866 72.1337 5.38348 72.2726 5.10187L74.0781 1.44352C74.4286 0.733996 75.4401 0.733996 75.79 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M97.7034 1.44352L99.5089 5.10187C99.6478 5.38348 99.9167 5.57894 100.227 5.62385L104.265 6.21051C105.048 6.32433 105.36 7.28638 104.794 7.83857L101.872 10.6863C101.648 10.9055 101.545 11.2215 101.598 11.5311L102.288 15.5521C102.421 16.3317 101.603 16.9263 100.903 16.5582L97.2916 14.6599C97.0137 14.5138 96.6812 14.5138 96.4033 14.6599L92.7921 16.5582C92.0919 16.9263 91.2736 16.3317 91.4072 15.5521L92.097 11.5311C92.1501 11.2215 92.0473 10.9055 91.8224 10.6863L88.901 7.83857C88.3347 7.28638 88.6471 6.32433 89.43 6.21051L93.4674 5.62385C93.7784 5.57866 94.047 5.38348 94.186 5.10187L95.9915 1.44352C96.3417 0.733996 97.3532 0.733996 97.7034 1.44352Z"
                    fill="#FCE340"
                  />
                </svg>

                <p>
                  <span className="font-bold">Rated 4.8</span> by 458 Customers
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 mt-6">
            <div className="flex flex-row items-center justify-between w-full xl:gap-2 rounded-xl border-[1.5px] border-[#8FC3CD]  py-4 xl:px-4 px-12">
              <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
                <div className="relative flex flex-col items-center justify-center min-w-[65px] min-h-[65px] overflow-hidden">
                  <Image
                    src="/images/chachacha/item20.jpg"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center xl:items-start justify-center">
                  <p className="text-lg font-bold">
                    Multi-Function Storage Unit
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="line-through">$75.00</p>
                    <p className="font-semibold">$49.99</p>
                  </div>
                </div>
              </div>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20.8926"
                  cy="20.7639"
                  r="19.75"
                  stroke="#25CA85"
                  stroke-width="1.5"
                />
                <path
                  d="M20.5989 9.36658V20.764M20.5989 32.1614V20.764M20.5989 20.764H9.42188H32.3638"
                  stroke="#25CA85"
                  stroke-width="2"
                />
              </svg>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
                <div className="relative flex flex-col items-center justify-center min-w-[65px] min-h-[65px] overflow-hidden">
                  <Image
                    src="/images/chachacha/item21.jpg"
                    alt="profile image"
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center xl:items-start justify-center">
                  <p className="text-lg text-center xl:text-start font-bold max-w-[10ch] leading-tight">
                    Premium Shelf Set
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="line-through">$200.00</p>
                    <p className="font-semibold">$119.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-between w-full rounded-xl border-[3px] border-[#45C1DC] ">
              <div className="flex flex-row items-center xl:justify-start justify-center gap-4 p-4 w-full">
                <div className="relative flex flex-col items-center justify-center min-w-[65px] min-h-[65px] overflow-hidden">
                  <Image
                    src="/images/chachacha/item22.jpg"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start justify-center">
                  <p className="text-lg font-bold">Small Storage Box</p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="line-through">$30.00</p>
                    <p className="font-semibold">$00</p>
                    <div className="flex flex-col items-center justify-center bg-[#25CA85] rounded-lg px-2">
                      <p className="font-bold text-white">FREE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-1 -top-1">
                <svg
                  width="104"
                  height="31"
                  viewBox="0 0 104 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9762 30.2556L0.138672 0.487983C28.9363 -0.0345183 84.8124 0.48733 90.1941 0.487983C95.5758 0.488637 102.228 3.08629 102.859 9.10585C103.489 15.1254 102.859 30.2556 102.859 30.2556H27.9762Z"
                    fill="#45C1DC"
                  />
                </svg>
              </div>
              <div className="absolute right-5 -top-[3px]">
                <p className="text-xl font-bold text-white">GIFT</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between w-full mt-6 md:gap-0 gap-5">
              <div className="flex flex-row items-center justify-between gap-4">
                <p>QTY</p>
                <Select>
                  <SelectTrigger className="w-[108px]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row items-center justify-between gap-4">
                <p className="text-4xl text-start max-w-[20ch] line-through">
                  $275
                </p>
                <p className="text-4xl text-start max-w-[20ch] font-bold">
                  $169
                </p>
              </div>
              <div className="md:absolute right-0">
                <svg
                  width="124"
                  height="37"
                  viewBox="0 0 124 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.953125 0.546143V18.5372V36.9371H123.586L109.204 18.5372L123.586 0.546143H0.953125Z"
                    fill="#25CA85"
                  />
                </svg>
              </div>
              <p className="text-sm leading-tight text-white font-semibold max-w-[10ch] mx-5 z-10 md:mt-0 -mt-14">
                YOU SAVE $106 TODAY!
              </p>
            </div>
          </div>
          <a
            href="/"
            className="relative flex flex-col items-center justify-center bg-[#35466C] h-[82px] w-full xl:w-[555px] py-4 rounded-lg mt-8 overflow-hidden"
          >
            <svg
              width="555"
              height="53"
              viewBox="0 0 555 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 pointer-events-none"
            >
              <path
                d="M74.9336 13.5757C39.2323 -1.03929 10.4725 9.70055 0.555282 16.8973L0.166421 17.3911C0.0408357 21.5413 -0.134983 32.157 0.166421 41.4176C0.467824 50.6782 9.33412 52.8825 13.7296 52.8271C184.852 52.8152 529.967 52.7986 541.452 52.8271C552.937 52.8555 555.256 44.7839 554.98 40.7446V20.7724C526.158 32.9515 498.577 21.6028 480.602 13.022C462.627 4.44123 425.748 4.44124 389.799 17.7276C353.85 31.014 330.297 28.2462 268.006 8.59339C218.173 -7.12884 177.616 3.51872 163.567 10.8078C148.898 17.82 110.635 28.1907 74.9336 13.5757Z"
                fill="#152139"
              />
            </svg>

            <div className="flex flex-col z-10">
              <p className="text-white text-2xl">Add to Cart</p>
            </div>
          </a>
          <ul className="flex flex-col items-start justify-center w-full gap-6 mt-6">
            <div className="flex flex-row items-center xl:items-start justify-between xl:justify-start w-full gap-5">
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="43"
                    height="44"
                    viewBox="0 0 43 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4987 8.1311C13.8595 8.1311 7.64453 14.3461 7.64453 21.9853C7.64453 29.6245 13.8595 35.8395 21.4987 35.8395C29.1379 35.8395 35.3529 29.6245 35.3529 21.9853C35.3529 14.3461 29.138 8.1311 21.4987 8.1311ZM21.4987 33.3205C15.2485 33.3205 10.1635 28.2355 10.1635 21.9853C10.1635 15.735 15.2485 10.65 21.4987 10.65C27.749 10.65 32.8339 15.735 32.8339 21.9853C32.8339 28.2355 27.749 33.3205 21.4987 33.3205Z"
                      fill="#152139"
                    />
                    <path
                      d="M26.9051 17.3163L20.2388 23.9825L16.0914 19.8352C15.5997 19.3434 14.8022 19.3434 14.3103 19.8352C13.8184 20.3271 13.8184 21.1245 14.3103 21.6164L19.3482 26.6543C19.5941 26.9002 19.9165 27.0232 20.2387 27.0232C20.561 27.0232 20.8834 26.9003 21.1292 26.6543L28.6861 19.0974C29.1779 18.6056 29.1779 17.8082 28.6861 17.3163C28.1944 16.8244 27.3969 16.8244 26.9051 17.3163Z"
                      fill="#152139"
                    />
                    <path
                      d="M41.1965 13.1548C41.1923 13.1522 36.7976 10.5216 36.7976 10.5216L35.8111 6.43605C35.3734 4.62317 33.7064 3.41147 31.8467 3.55572L26.8387 3.9433C26.8387 3.9433 23.9539 1.39733 23.9482 1.39254C22.5286 0.183281 20.4676 0.183281 19.048 1.39254C19.0423 1.39733 16.1575 3.9433 16.1575 3.9433L11.1495 3.55572C9.3047 3.41248 7.65051 4.60301 7.19627 6.39088L5.82294 10.7668C5.82294 10.7668 1.80884 13.1515 1.80355 13.1548C0.214685 14.1313 -0.422187 16.0913 0.289329 17.8153L2.00288 21.9678L0.289329 26.1201C-0.422187 27.8441 0.214685 29.8041 1.80363 30.7806C1.8085 30.7836 6.19465 33.3971 6.19465 33.3971L7.18527 37.4994C7.59938 39.2147 9.11394 40.3915 10.8508 40.3913C11.1165 40.3913 10.8181 40.4014 16.1055 39.9962C16.1055 39.9962 19.0433 42.5742 19.048 42.5782C19.7579 43.1828 20.628 43.4851 21.4982 43.4851C22.3684 43.4851 23.2386 43.1828 23.9484 42.5782C23.9531 42.5741 26.8909 39.9962 26.8909 39.9962L31.8468 40.3797C33.7059 40.5234 35.3736 39.3123 35.8112 37.4994L36.7977 33.4137C42.1754 30.1947 41.0351 30.8802 41.1966 30.7805C42.7854 29.804 43.4222 27.844 42.7107 26.1201L40.9972 21.9676L42.7107 17.8151C43.4222 16.0913 42.7854 14.1314 41.1965 13.1548ZM38.4703 22.4482L40.3822 27.0811C40.6187 27.6539 40.4085 28.305 39.8826 28.6315L35.0505 31.524C34.7605 31.6976 34.5525 31.9805 34.4731 32.309L33.3625 36.9084C33.2167 37.5126 32.6618 37.9162 32.0411 37.8684L26.5562 37.4439C26.2184 37.4178 25.8833 37.5291 25.6283 37.753L22.309 40.6658C21.8379 41.0623 21.1584 41.0623 20.6873 40.6656L17.3682 37.753C17.1131 37.5291 16.7779 37.4175 16.4403 37.4439L10.9554 37.8684C10.3351 37.9163 9.77978 37.5126 9.63393 36.9083L8.51896 32.2908C8.43945 31.9614 8.23046 31.6779 7.93935 31.5045L3.1165 28.6308C2.59139 28.304 2.38165 27.6535 2.61792 27.081L4.5298 22.4481C4.65684 22.1404 4.65684 21.795 4.5298 21.4872L2.61767 16.8543C2.38156 16.2822 2.59105 15.632 3.11558 15.3051L7.52373 12.6863C7.7904 12.5279 7.98923 12.2766 8.08209 11.9807C9.70664 6.80113 9.61495 7.10516 9.63376 7.02716C9.77961 6.42295 10.3334 6.01874 10.9552 6.06711L16.4943 6.49583C16.8342 6.52203 17.1696 6.40968 17.4249 6.18441L20.6885 3.30408C21.1589 2.90894 21.837 2.90894 22.3076 3.30391L25.5713 6.18441C25.8266 6.40985 26.1628 6.52203 26.5019 6.49583L32.041 6.06711C32.6606 6.01925 33.2166 6.42287 33.3624 7.02724L34.473 11.6265C34.5524 11.955 34.7604 12.2379 35.0505 12.4116L39.8825 15.304C40.4084 15.6305 40.6187 16.2815 40.3821 16.8543L38.4703 21.4872C38.3433 21.795 38.3433 22.1405 38.4703 22.4482Z"
                      fill="#152139"
                    />
                  </svg>
                </div>
                <p className="max-w-[18ch] font-semibold">
                  Top Quality Materials: Made to Last
                </p>
              </li>
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="44"
                    height="45"
                    viewBox="0 0 44 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3125 20.0051H24.7499C25.5093 20.0051 26.1249 19.3894 26.1249 18.6301C26.1249 17.8708 25.5093 17.2551 24.7499 17.2551H21.3125C19.417 17.2551 17.875 18.7972 17.875 20.6926C17.875 22.588 19.417 24.13 21.3125 24.13H22.6874C23.0665 24.13 23.3749 24.4385 23.3749 24.8175C23.3749 25.1966 23.0665 25.505 22.6874 25.505H19.25C18.4906 25.505 17.875 26.1207 17.875 26.88C17.875 27.6393 18.4906 28.255 19.25 28.255H22.6874C24.5829 28.255 26.1249 26.713 26.1249 24.8175C26.1249 22.9221 24.5829 21.3801 22.6874 21.3801C22.2065 21.3801 21.7934 21.3801 21.3125 21.3801C20.9334 21.3801 20.625 21.0717 20.625 20.6926C20.625 20.3135 20.9334 20.0051 21.3125 20.0051Z"
                      fill="#152139"
                    />
                    <path
                      d="M33 17.2551C30.7254 17.2551 28.875 19.1056 28.875 21.3801V26.88C28.875 27.6393 29.4906 28.255 30.25 28.255C31.0094 28.255 31.625 27.6393 31.625 26.88V25.505H34.3749V26.88C34.3749 27.6393 34.9905 28.255 35.7499 28.255C36.5093 28.255 37.1249 27.6393 37.1249 26.88V21.3801C37.1249 19.1056 35.2745 17.2551 33 17.2551ZM31.625 22.7551V21.3801C31.625 20.6219 32.2418 20.0051 33 20.0051C33.7581 20.0051 34.3749 20.6219 34.3749 21.3801V22.7551H31.625Z"
                      fill="#152139"
                    />
                    <path
                      d="M13.7499 17.2551C12.9906 17.2551 12.3749 17.8708 12.3749 18.6301V24.13C12.3749 24.8882 11.7581 25.505 11 25.505C10.2418 25.505 9.62497 24.8882 9.62497 24.13V18.6301C9.62497 17.8708 9.00932 17.2551 8.24998 17.2551C7.49065 17.2551 6.875 17.8708 6.875 18.6301V24.13C6.875 26.4045 8.72547 28.255 11 28.255C13.2744 28.255 15.1249 26.4045 15.1249 24.13V18.6301C15.1249 17.8708 14.5093 17.2551 13.7499 17.2551Z"
                      fill="#152139"
                    />
                    <path
                      d="M43.9657 21.5099C43.3298 9.96324 33.7481 0.755493 22 0.755493C9.47049 0.755493 -0.667781 11.2494 0.0344056 24.0006C0.673171 35.6006 10.2943 44.7551 22 44.7551C34.5533 44.755 44.667 34.2442 43.9657 21.5099ZM39.7071 30.3176C38.5716 30.3176 4.9602 30.3176 4.29307 30.3176C2.16469 25.3482 2.3076 19.8297 4.29299 15.1928H39.707C41.7397 19.9433 41.7915 25.4463 39.7071 30.3176ZM30.9374 39.8086C29.6556 40.4817 28.3027 41.013 26.8442 41.3906C26.7967 41.4029 26.8125 42.0429 26.8125 33.0676H30.9374V39.8086ZM17.1876 41.3985C15.7977 41.0425 14.4148 40.5169 13.0921 39.8244C13.0491 39.8019 13.0626 40.3133 13.0626 33.0676H17.1876V41.3985ZM22 3.50546C28.5932 3.50546 34.7527 6.951 38.2559 12.4429H5.74437C9.24766 6.95083 15.4071 3.50546 22 3.50546ZM5.74007 33.0676H10.3127V38.0546C8.50293 36.6738 6.95882 34.9899 5.74007 33.0676ZM19.9376 41.8948V33.0676H24.0625V41.8948C22.6953 42.0395 21.3045 42.0395 19.9376 41.8948ZM33.6874 38.0545V33.0676H38.2599C37.0411 34.9899 35.4971 36.6738 33.6874 38.0545Z"
                      fill="#152139"
                    />
                    <path
                      d="M29.5625 10.3802C30.3219 10.3802 30.9375 9.76464 30.9375 9.00525C30.9375 8.24586 30.3219 7.63025 29.5625 7.63025C28.8031 7.63025 28.1875 8.24586 28.1875 9.00525C28.1875 9.76464 28.8031 10.3802 29.5625 10.3802Z"
                      fill="#152139"
                    />
                    <path
                      d="M22 9.00525C22.7594 9.00525 23.375 8.38964 23.375 7.63025C23.375 6.87086 22.7594 6.25525 22 6.25525C21.2406 6.25525 20.625 6.87086 20.625 7.63025C20.625 8.38964 21.2406 9.00525 22 9.00525Z"
                      fill="#152139"
                    />
                    <path
                      d="M14.4375 10.3802C15.1969 10.3802 15.8125 9.76464 15.8125 9.00525C15.8125 8.24586 15.1969 7.63025 14.4375 7.63025C13.6781 7.63025 13.0625 8.24586 13.0625 9.00525C13.0625 9.76464 13.6781 10.3802 14.4375 10.3802Z"
                      fill="#152139"
                    />
                  </svg>
                </div>
                <p className="max-w-[15ch] font-semibold">
                  Proudly Made in the USA
                </p>
              </li>
            </div>

            <div className="bg-[#E6E6E6] w-full h-[1px]" />
            <div className="flex flex-row items-center xl:items-start justify-between xl:justify-start w-full gap-5">
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="40"
                    height="42"
                    viewBox="0 0 40 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0.214111C16.2205 0.214111 12.5865 1.29813 9.45312 3.30681V1.41528C9.45312 0.751916 8.92844 0.214111 8.28125 0.214111C7.63406 0.214111 7.10938 0.751916 7.10938 1.41528V5.63052C7.10938 6.09249 7.36781 6.51346 7.77414 6.71341C8.18039 6.91329 8.66258 6.85675 9.0143 6.56775C12.1602 3.98283 15.959 2.61646 20 2.61646C29.7357 2.61646 37.6562 10.735 37.6562 20.7141C37.6562 24.5761 36.3805 28.4437 34.0639 31.6047C33.6752 32.1352 33.7795 32.8881 34.297 33.2865C34.8145 33.6849 35.5491 33.578 35.9378 33.0476C38.5573 29.4732 40 25.0931 40 20.7141C40 9.42638 31.0118 0.214111 20 0.214111Z"
                      fill="#152139"
                    />
                    <path
                      d="M20 41.2141C23.7795 41.2141 27.4135 40.1301 30.5469 38.1214V40.0129C30.5469 40.6763 31.0716 41.2141 31.7188 41.2141C32.3659 41.2141 32.8906 40.6763 32.8906 40.0129V35.7977C32.8906 35.3357 32.6322 34.9148 32.2259 34.7148C31.8195 34.5149 31.3373 34.5715 30.9857 34.8605C27.8398 37.4455 24.041 38.8118 20 38.8118C10.2643 38.8118 2.34375 30.6932 2.34375 20.7141C2.34375 16.8521 3.61953 12.9845 5.93609 9.82349C6.32484 9.29305 6.22047 8.54007 5.70297 8.14169C5.18539 7.74322 4.45086 7.85028 4.06219 8.38064C1.44266 11.955 0 16.3351 0 20.7141C0 32.0018 8.9882 41.2141 20 41.2141Z"
                      fill="#152139"
                    />
                    <path
                      d="M20 36.4094C20.6472 36.4094 21.1719 35.8716 21.1719 35.2083V31.5908C23.6085 31.5286 25.5976 31.2343 27.2101 30.291C29.4554 28.9773 30.5469 26.6305 30.5469 23.1165C30.5469 17.4826 24.3862 9.26326 20.8554 5.39901C20.6338 5.15645 20.3241 5.0188 20 5.0188C19.6759 5.0188 19.3662 5.15645 19.1446 5.39901C15.6584 9.21441 9.45312 17.4569 9.45312 23.1165C9.45312 26.6305 10.5446 28.9773 12.7899 30.291C14.4024 31.2343 16.3915 31.5286 18.8281 31.5908V35.2083C18.8281 35.8716 19.3528 36.4094 20 36.4094ZM13.9518 28.2045C13.0267 27.6633 11.7969 26.5471 11.7969 23.1165C11.7969 18.1615 17.7502 10.6751 20.0046 8.01804C22.8994 11.4101 28.2031 18.5658 28.2031 23.1165C28.2031 26.5471 26.9733 27.6633 26.0482 28.2045C24.809 28.9296 23.0266 29.1376 21.1719 29.1881V26.0164L25.5161 21.5636C25.9737 21.0945 25.9737 20.334 25.5161 19.8649C25.0585 19.3958 24.3165 19.3958 23.8588 19.8649L21.1719 22.6189V18.8093L23.1723 16.7588C23.63 16.2897 23.63 15.5292 23.1723 15.0601C22.7148 14.591 21.9727 14.591 21.5151 15.0601L20 16.6131L18.4848 15.06C18.0273 14.5909 17.2852 14.5909 16.8276 15.06C16.3699 15.5291 16.3699 16.2896 16.8276 16.7587L18.8281 18.8093V22.6189L16.1411 19.8647C15.6835 19.3956 14.9415 19.3956 14.4838 19.8647C14.0262 20.3338 14.0262 21.0943 14.4838 21.5634L18.8281 26.0163V29.188C16.9734 29.1376 15.1909 28.9295 13.9518 28.2045Z"
                      fill="#152139"
                    />
                  </svg>
                </div>
                <p className="max-w-[18ch] font-semibold">
                  Modern Design: Fits Any Decor
                </p>
              </li>
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="39"
                    height="43"
                    viewBox="0 0 39 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.7889 26.4343C38.3886 25.7805 38.7539 24.9176 38.7539 23.9734C38.7539 21.9382 37.0583 20.282 34.9746 20.282H27.6394C28.3659 18.1287 28.6758 15.2715 28.6758 14.0468V12.8171C28.6758 10.1035 26.4149 7.89526 23.6367 7.89526H22.377C21.7991 7.89526 21.2952 8.27917 21.155 8.82714L20.4688 11.5087C19.5072 15.2641 16.4544 19.4075 13.2949 20.1606C12.7414 18.7923 11.375 17.821 9.7793 17.821H2.2207C1.52531 17.821 0.960938 18.3723 0.960938 19.0515V41.2C0.960938 41.8792 1.52531 42.4304 2.2207 42.4304H9.7793C11.2818 42.4304 12.5819 41.5699 13.1907 40.3263L17.5193 41.7356C18.9344 42.1966 20.4092 42.4304 21.9016 42.4304H32.4551C34.5387 42.4304 36.2344 40.7742 36.2344 38.739C36.2344 38.2591 36.1403 37.7998 35.969 37.3789C37.5714 36.9516 38.7539 35.5168 38.7539 33.8171C38.7539 32.873 38.3886 32.01 37.7889 31.3562C38.3886 30.7024 38.7539 29.8394 38.7539 28.8953C38.7539 27.9511 38.3886 27.0881 37.7889 26.4343ZM11.0391 38.739C11.0391 39.4174 10.4738 39.9695 9.7793 39.9695H3.48047V20.282H9.7793C10.4738 20.282 11.0391 20.8341 11.0391 21.5125V38.739ZM32.4551 27.6648H34.9746C35.6692 27.6648 36.2344 28.2169 36.2344 28.8953C36.2344 29.5737 35.6692 30.1257 34.9746 30.1257H32.4551C31.7597 30.1257 31.1953 30.677 31.1953 31.3562C31.1953 32.0354 31.7597 32.5867 32.4551 32.5867H34.9746C35.6692 32.5867 36.2344 33.1387 36.2344 33.8171C36.2344 34.4955 35.6692 35.0476 34.9746 35.0476H32.4551C31.7597 35.0476 31.1953 35.5989 31.1953 36.2781C31.1953 36.9573 31.7597 37.5085 32.4551 37.5085C33.1496 37.5085 33.7148 38.0606 33.7148 38.739C33.7148 39.4174 33.1496 39.9695 32.4551 39.9695H21.9016C20.6805 39.9695 19.4736 39.7783 18.3155 39.401L13.5586 37.8523V22.6264C15.5347 22.2598 17.4689 21.0375 19.2149 19.0367C20.9198 17.0828 22.3022 14.4922 22.9128 12.1059L23.3604 10.3562H23.6367C25.0258 10.3562 26.1562 11.4603 26.1562 12.8171V14.0468C26.1562 15.6989 25.6271 18.8678 24.9502 20.282H22.377C21.6816 20.282 21.1172 20.8332 21.1172 21.5125C21.1172 22.1917 21.6816 22.7429 22.377 22.7429H34.9746C35.6692 22.7429 36.2344 23.295 36.2344 23.9734C36.2344 24.6518 35.6692 25.2039 34.9746 25.2039H32.4551C31.7597 25.2039 31.1953 25.7551 31.1953 26.4343C31.1953 27.1135 31.7597 27.6648 32.4551 27.6648Z"
                      fill="#152139"
                    />
                    <path
                      d="M7.25977 37.5085C7.95551 37.5085 8.51953 36.9576 8.51953 36.2781C8.51953 35.5985 7.95551 35.0476 7.25977 35.0476C6.56402 35.0476 6 35.5985 6 36.2781C6 36.9576 6.56402 37.5085 7.25977 37.5085Z"
                      fill="#152139"
                    />
                    <path
                      d="M24.8965 0.43042C24.2008 0.43042 23.6367 0.981342 23.6367 1.66089V4.20386C23.6367 4.8834 24.2008 5.43433 24.8965 5.43433C25.5922 5.43433 26.1562 4.8834 26.1562 4.20386V1.66089C26.1562 0.981342 25.5922 0.43042 24.8965 0.43042Z"
                      fill="#152139"
                    />
                    <path
                      d="M19.5517 5.85662L17.7702 4.11649C17.2783 3.63596 16.4806 3.63596 15.9886 4.11649C15.4966 4.59703 15.4966 5.37608 15.9886 5.85662L17.7702 7.59675C18.2621 8.07721 19.0598 8.07729 19.5517 7.59675C20.0437 7.11621 20.0437 6.33716 19.5517 5.85662Z"
                      fill="#152139"
                    />
                    <path
                      d="M33.8044 4.11649C33.3125 3.63596 32.5148 3.63596 32.0228 4.11649L30.2413 5.85654C29.7493 6.33708 29.7493 7.11613 30.2413 7.59667C30.7331 8.07721 31.5308 8.07729 32.0228 7.59675L33.8044 5.85662C34.2964 5.37608 34.2964 4.59703 33.8044 4.11649Z"
                      fill="#152139"
                    />
                  </svg>
                </div>
                <p className="max-w-[20ch] font-semibold">
                  Easy Assembly: No Tools Required
                </p>
              </li>
            </div>
            <div className="bg-[#E6E6E6] w-full h-[1px]" />
          </ul>
          <div className="flex flex-col items-start justify-start w-full gap-2 mt-6">
            <h3 className="capitalize text-xl font-bold text-start">
              Create a Clutter-Free Home with Our Innovative Storage Solutions
            </h3>
            <p>Order now and transform your space with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
});
Products.displayName = "Product";
export default Products;
