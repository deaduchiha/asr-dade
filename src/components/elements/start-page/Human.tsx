import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Human = ({
  glareColor,
  setGlareColor,
}: {
  glareColor: string;
  setGlareColor: (color: string) => void;
}) => {
  return (
    <Box
      as={Tilt}
      width={"full"}
      height={"90%"}
      pos={"relative"}
      onEnter={() => {
        setGlareColor("#001524");
      }}
      onLeave={() => setGlareColor("#0077b6")}
    >
      <Box
        as={motion.svg}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={"full"}
        height={"90%"}
        viewBox="0 0 640.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        style={{ transition: "2s" }}
      >
        <g
          style={{ transition: "1s" }}
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill={glareColor}
          stroke="none"
        >
          <path
            d="M3105 12776 c-102 -28 -157 -54 -221 -102 -110 -84 -190 -212 -221
-356 -22 -105 -23 -303 -1 -346 9 -18 20 -69 23 -115 18 -230 64 -361 176
-499 18 -22 22 -40 23 -105 2 -148 -21 -191 -133 -247 -124 -63 -214 -84 -586
-136 -444 -62 -513 -95 -580 -275 -33 -86 -52 -172 -72 -323 -21 -160 -24
-746 -5 -987 35 -438 95 -917 136 -1098 12 -52 11 -64 -11 -149 -69 -266 -56
-639 42 -1193 19 -110 46 -272 60 -360 14 -88 32 -198 40 -245 8 -47 19 -141
25 -210 6 -69 13 -143 16 -165 20 -153 86 -316 168 -415 25 -30 48 -68 50 -85
3 -16 12 -131 21 -255 35 -494 96 -985 177 -1420 l30 -165 -21 -160 c-45 -351
-59 -645 -42 -935 20 -336 48 -533 146 -1030 63 -313 83 -437 91 -565 5 -68
11 -95 26 -111 51 -57 43 -128 -43 -356 -73 -196 -78 -224 -49 -261 44 -56
211 -114 298 -104 79 9 178 34 220 56 87 44 98 90 61 254 -18 83 -20 124 -20
407 1 173 4 335 6 360 11 97 86 905 100 1080 31 383 45 663 45 920 0 158 5
283 12 310 6 27 11 178 13 380 1 184 7 389 13 455 6 66 18 253 27 415 8 162
20 376 25 475 5 99 14 299 20 445 13 312 18 376 31 363 15 -15 28 -412 35
-1003 7 -534 4 -594 -31 -775 -12 -57 -19 -183 -25 -445 -4 -201 -14 -435 -20
-520 -15 -189 -8 -838 16 -1430 24 -611 23 -675 -13 -950 -17 -129 -29 -249
-26 -267 3 -18 -5 -99 -17 -180 -32 -213 -25 -240 73 -285 47 -21 66 -23 197
-23 126 0 154 3 213 23 37 13 87 38 110 56 62 47 61 82 -4 282 -34 106 -53
182 -56 229 -5 66 -4 73 22 104 25 29 29 44 36 134 13 161 44 332 139 772 106
492 135 644 170 900 33 248 60 640 60 890 0 100 6 147 30 254 97 428 184 1072
216 1590 l7 113 44 50 c68 77 110 146 141 233 36 98 48 165 66 367 8 86 19
182 25 215 37 209 58 316 88 448 165 728 195 1059 122 1354 -19 74 -20 93 -10
155 47 308 75 786 75 1316 1 473 -6 599 -45 835 -32 187 -62 265 -129 332 -83
83 -200 131 -466 187 -373 80 -474 112 -577 180 -51 34 -59 44 -73 93 -12 40
-15 84 -12 158 l3 102 44 49 c50 56 103 160 126 249 9 33 19 120 22 195 4 107
9 144 25 178 19 40 20 50 9 155 -15 138 -45 227 -105 312 -79 109 -187 178
-352 220 -113 30 -163 30 -269 1z m-971 -3606 c35 -146 103 -611 127 -875 10
-116 10 -135 -4 -162 -28 -54 -67 -165 -97 -277 -43 -160 -44 -159 -41 49 1
77 -2 154 -8 172 -7 24 -5 46 10 94 33 106 44 296 30 520 -11 174 -18 251 -47
504 -9 78 8 64 30 -25z m2179 -490 c7 -249 30 -450 64 -549 18 -51 18 -56 1
-123 -9 -38 -22 -138 -29 -221 -6 -84 -13 -163 -15 -176 -9 -46 -24 -6 -38
104 -21 155 -43 286 -70 422 -24 115 -24 121 -10 248 20 182 64 516 71 539 13
46 21 -21 26 -244z"
          />
        </g>
      </Box>
    </Box>
  );
};

export default Human;
