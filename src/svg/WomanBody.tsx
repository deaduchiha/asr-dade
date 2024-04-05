import { THumanBody } from "@/types/human-body";

const WomanBody = ({
  data: { color = "#000", height = 600, width = 280 },
}: {
  data: Partial<THumanBody>;
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 640.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M3123 12789 c-73 -12 -183 -52 -251 -90 -78 -45 -183 -151 -214 -219
   -92 -196 -135 -485 -125 -835 6 -205 22 -329 58 -448 l20 -68 29 25 c33 27
   115 60 174 69 l39 6 -7 -68 c-9 -102 -21 -126 -83 -171 -101 -72 -176 -94
   -590 -174 -225 -44 -311 -91 -371 -203 -129 -243 -204 -768 -218 -1528 -6
   -332 6 -748 27 -918 9 -72 8 -95 -5 -135 -58 -181 -66 -511 -21 -862 14 -110
   27 -189 109 -663 20 -114 36 -223 36 -241 0 -19 4 -46 10 -60 5 -14 16 -105
   25 -203 19 -209 27 -252 61 -354 30 -91 77 -173 145 -251 l49 -56 20 -144 c65
   -455 185 -1019 321 -1500 l49 -176 -19 -74 c-85 -314 -127 -699 -118 -1088 7
   -296 22 -445 93 -919 58 -393 84 -591 84 -660 0 -31 7 -51 25 -73 44 -52 31
   -110 -81 -354 -88 -194 -93 -223 -43 -269 126 -115 464 -109 569 12 37 42 39
   85 9 210 -20 81 -21 113 -20 408 1 302 3 338 36 605 84 678 115 1030 122 1392
   6 288 -3 451 -31 559 -8 30 -9 55 -3 70 50 132 80 416 58 552 -10 60 -9 111 3
   268 21 257 52 843 67 1261 7 186 14 337 15 335 7 -8 36 -908 37 -1167 2 -300
   0 -320 -23 -430 -23 -108 -25 -133 -24 -400 0 -222 4 -300 16 -355 14 -61 14
   -74 2 -97 -8 -15 -24 -83 -37 -150 -21 -117 -22 -148 -22 -643 1 -495 7 -676
   44 -1250 9 -140 3 -235 -30 -470 -11 -82 -22 -202 -24 -265 -2 -63 -11 -155
   -19 -205 -24 -140 -22 -178 14 -219 43 -49 104 -67 241 -73 95 -4 130 -2 197
   15 90 23 186 78 204 116 14 32 -6 94 -77 236 -72 143 -103 223 -111 281 -6 42
   -3 50 18 72 21 21 26 37 31 116 11 147 43 332 128 736 44 209 89 427 100 485
   91 493 126 957 99 1320 l-9 125 49 175 c139 497 260 1066 326 1535 l17 120 53
   58 c82 92 150 234 173 365 6 31 18 134 26 227 9 94 18 176 20 183 3 7 12 61
   21 120 8 59 36 197 60 307 114 507 145 687 165 933 12 158 2 322 -28 447 -20
   85 -21 115 -5 330 22 296 15 1014 -13 1335 -34 383 -90 656 -160 776 -36 61
   -141 153 -237 207 -46 26 -146 75 -223 108 -357 156 -470 215 -548 284 -30 26
   -47 70 -47 117 0 33 0 33 130 13 146 -22 135 -27 158 63 92 346 31 959 -128
   1288 -99 205 -343 309 -617 263z m-894 -3644 c51 -217 94 -468 126 -740 22
   -195 22 -204 -26 -277 -67 -103 -155 -294 -204 -438 -47 -141 -52 -139 -35 15
   12 113 14 313 3 343 -6 16 -1 47 19 107 63 188 94 513 85 880 -3 121 -9 229
   -13 240 -5 14 -4 17 3 10 6 -5 25 -68 42 -140z m1964 -172 c13 -335 72 -714
   138 -879 19 -48 19 -53 4 -110 -14 -52 -33 -272 -35 -409 -1 -48 -3 -46 -35
   65 -58 201 -122 357 -200 490 l-44 75 14 110 c8 61 42 260 75 444 33 184 60
   342 60 352 0 11 4 19 8 19 5 0 12 -71 15 -157z"
        />
      </g>
    </svg>
  );
};

export default WomanBody;
