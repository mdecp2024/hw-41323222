var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  fqpabi8 \n 個人倉儲: https://github.com/mdecp2024/hw-nfugithub22232 \n 個人網站: https://mdecp2024.github.io/hw-41323222 \n', 'tags': '', 'url': 'About.html'}, {'title': 'References', 'text': '\n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'References.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '\n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w9', 'text': '\n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w11_hw', 'text': '\n 1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 題目一答案: circle \n def draw_filled_circle():\n    size = 10\n    center_x = 5\n    center_y = 5\n    radius = 4\n    for y in range(size):\n        for x in range(size):\n            # 計算點(x, y)到圓心的距離的平方\n            distance_squared = (x - center_x)**2 + (y - center_y)**2\n            # 如果距離平方小於或等於半徑平方，則該點在圓內或圓上\n            if distance_squared <= radius**2:\n                print("*", end="")\n            else:\n                print(" ", end="")\n        print()  # 換行\n\ndraw_filled_circle() \n \n \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. 網頁上的方格與塗色 \n 題目二答案: CIRCLE \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立畫布超檔案物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每格的像素數\ngs = 40  # 每格的像素數\n\n# 取得畫布的上下文\nctx = canvas.getContext("2d")\n\n# 繪製矩形\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 繪製網格\ndef grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 填充顏色\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\n# 繪製圓形，判斷每個格子是否在圓形內\ndef draw_circle():\n    center_x = 5  # 圓心 x\n    center_y = 5  # 圓心 y\n    radius = 4  # 圓的半徑\n\n    # 繪製圓形\n    for i in range(10):\n        for j in range(10):\n            # 計算每個格子的中心點\n            cx = i + 0.5  # 格子中心的 x\n            cy = j + 0.5  # 格子中心的 y\n            distance_squared = (cx - center_x)**2 + (cy - center_y)**2\n            \n            # 如果這個格子在圓形內部或圓上\n            if distance_squared <= radius**2:\n                fill(i, j, "black")  # 填充顏色為黑色\n\n# 繪製網格與圓形\ngrid(10, 10, gs)\ndraw_circle()\n \n \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第一題  _Text, questions, and art -  Strings, input(), and print()  - \n 1-1 :  answer \n 解釋 :\xa0 input() \xa0 就是讓程式能問你問題並得到你的答案 \n name = input("__name__：")\nprint("nice to meet you " + name) \n 1-2 :  answer \n 解釋 : \xa0 print() \xa0 就是讓程式將文字或數據顯示出來，讓你知道程式正在做什麼或顯示結果 \n print (" /\\_/\\   ")\nprint (" >^.^<   ")\nprint ("  / \\    ")\nprint (" (___)___") \n \n 第二題  _Events and favorites -  Variables and string concatenation  - \n 2-1 :  answer \n 解釋 :\xa0 前兩句是寫出變數，後兩句是列印變數 \n \n first_name = "dududududu"\nlast_name  = "Max Verstappen"\nprint (first_name)\nprint (last_name) \n 2-2 :  answer \n name = input("What\'s your name?")\nfavorite_food = input ("What is your favorite food?")\nprint ("Hi! My name is " + name)\nprint ("My favorite food is " + favorite_food) \nprint (name + "\'s favorite food is " + favorite_food) \n \n 第三題\xa0 _ In a bookstore -  Lists and if... in... / else...  - \n 3 :  answer \n programming_books = ["Learn python", "Python for all",  "Intro to python"]\nprint (programming_books)\nwanted_book = input("Hi! What book would you like to buy?")\nprint (wanted_book)\nif wanted_book in programming_books:\n    print ("Yes, we sell it!")\nelse:\n    print ("Sorry, we don\'t sell that book") \n 第四題  _\xa0Grocery shopping - \xa0List methods: .append() and .remove()  - \n 4 :  answer \n shopping_list = ["carrots", "chocolate", "olives"]\nprint (shopping_list)\nnew_item = input("What else do I have to buy?")\n \nif new_item in shopping_list:\n    print (new_item + " is/are already in the shopping list")\n    print (shopping_list) \nelse:\n    shopping_list.append(new_item)\n    print (shopping_list)\n    item_to_remove = input("What do I have to remove?")\n \nif item_to_remove in shopping_list:\n    shopping_list.remove(item_to_remove)\n    print (shopping_list)\nelse:\n    print (item_to_remove + " is/are not in the list")\n    print (shopping_list) \n 第五題  _\xa0Customizing the burger menu - \xa0List methods: .index(), .pop(), and .insert()  - \n 5 :  answer \n todays_menu = ["burger", "salad", "coke"]\nprint(todays_menu)\nside_dish_index = todays_menu.index("salad")\nprint (side_dish_index)\ntodays_menu.pop(side_dish_index)\nprint (todays_menu)\ntodays_menu.insert(side_dish_index, "fries")\nprint (todays_menu) \n 第六題  _\xa0Traveling around the world -\xa0 List slicing  - \n 6 :  answer \n cities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\nprint (cities)\nprint (cities[1])\nprint (cities[1:4])\nprint (cities[1:4:2])\nprint (cities[0:3])\nprint (cities[:3])\nprint (cities[2:5])\nprint (cities[2:])\nprint (cities[0:5:2])\nprint (cities[::2])\nprint (cities[4])\nprint (cities[-1])\nprint (cities[-4:-1])\ncities[3:0:-1]\ncities[-2:-5:-1]\nprint (cities[::-1]) \n 第七題  _\xa0Senses, planets, and a house -\xa0 Changing, adding, and removing list elements using slicing  - \n 7-1 :  answer \n senses = ["eyes", "nose", "ears", "tongue", "skin"]\nprint (senses)\nsenses[1] = "smell"\nprint (senses)\nsenses[3:5] = ["taste", "touch"]\nprint (senses)\nsenses[0:3:2] = ["sight", "hearing"]\nprint (senses) \n 7-2 :  answer \n planets = ["Mercury", "Mars", "Earth", "Neptune"]\nprint (planets)\nplanets = planets + ["Jupiter"]\nprint (planets)\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\nprint (planets)\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]\nprint(planets) \n 7-3 :  answer \n house = ["kitchen", "dining room", "living room", "bedroom", "bathoom", "garden", "balcony", "terrace"]\nprint (house)\ndel house[1]\nprint (house)\ndel house[4:6]\nprint (house)\ndel house[::2]\nprint (house)\ndel house\nprint (house) \n 第八題  _\xa0My friends\' favorite dishes -\xa0 for ... in range()  - \n 8 :  answer \n friends = ["Geetha", "Luca", "Daisy", "Juhan"]  \n \ndishes  = ["sushi", "burgers", "tacos", "pizza"]  \n \nprint("My friends\' names are:")  \nprint(friends)  \n \nfor index in range(0, 4):  \n    print("index:  " + str(index))  \n    print("friend: " + friends[index])  \n \nprint("Their favorite dishes are:")  \nprint(dishes)  \n \nfor index in range(0, 4):  \n    print("index:  " + str(index))  \n    print("dish: " + dishes[index])  \n \nfor index in range(0, 4):  \n    print("My friend " + friends[index] + "\'s favorite dish is " + dishes[index]) \n 第九題  _\xa0At the zoo -\xa0 For loop with if... == ... / else - \n 9 :  answer \n animals = ["giraffe", "penguin", "dolphin"]\nprint (animals)\n# for each position in the list\nfor i in range (0, len(animals)):\n    print ("-- Beginning of loop --")\n    # print each element and its position\n    print ("The element in position " + str(i) + " is " + animals[i])\n    wanted_to_see = "penguin"\n    # for each position in the list\nfor i in range (0, len(animals)):\n    # if the current animal is what you really wanted to see\n    if animals[i] == wanted_to_see:\n        # print out that that\'s the animal you really wanted to see\n        print ("I saw a " + animals[i] + " and I really wanted to see it!")\n    # if the current animal is not what you really wanted to see\n    else:\n        # just print out that you saw it\n        print ("I saw a " + animals[i]) \n 第十題  _\xa0Where are my gloves? -\xa0 For loop for searching  - \n 10 :  answer \n accessories = ["belt", "hat", "gloves", "sunglasses", "ring"]\nprint(accessories)\n \nfor i in range(len(accessories)):\n    print(f"The element {accessories[i]} is in position {i}")\n \nfor i in range(len(accessories)):\n    if len(accessories[i]) == 6:\n        print(f"The element {accessories[i]} is in position {i} and it has 6 characters")\n \nfor i in range(len(accessories)):\n    if len(accessories[i]) < 6:\n        print(f"The element {accessories[i]} is in position {i} and it has less than 6 characters")\n \nn_of_characters = 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) > n_of_characters:\n        print(f"The element {accessories[i]} is in position {i} and it has more than {n_of_characters} characters")\n \nfor i in range(len(accessories)):\n    if len(accessories[i]) != n_of_characters:\n        print(f"The element {accessories[i]} is in position {i} and it has a number of characters different from {n_of_characters}")\n \nposition = 2\nfor i in range(len(accessories)):\n    if i <= position:\n        print(f"The element {accessories[i]} is in position {i}, which is less than or equal to {position}")\n \nfor i in range(len(accessories)):\n    if i >= position:\n        print(f"The element {accessories[i]} is in position {i}, which is at least {position}") \n 心得 : \n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '1. 交疊雙框 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400, height = 400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 200\n\n# gs*tc = canvas width and height\n\nctx = canvas.getContext("2d")\n\nwidth = 1\nheight = 1\n\nfor i in range(width):\n    for j in range(height):\n        #dRect(i*gs,j*gs,gs,gs,1,"lightgrey")\n        ctx.lineWidth = 1\n        ctx.strokeStyle = \'#ff0000\'\n        ctx.beginPath();\n        ctx.rect(i*gs,j*gs,gs,gs)\n        ctx.stroke();\n\noffset_x = 100\noffset_y = 100\n\nfor i in range(width):\n    for j in range(height):\n        ctx.lineWidth = 1\n        ctx.strokeStyle = \'#ff0000\'\n        ctx.beginPath()\n        ctx.rect(i * gs + offset_x, j * gs + offset_y, gs, gs)\n        ctx.stroke() \n \n 2. 外加兩外切圓 \n from browser import html\nfrom browser import document as doc\n\n# 建立 canvas 元素\ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 定義圓心和半徑\nx1, y1 = 200, 200  # 第一個圓的圓心\nx2, y2 = 300, 300  # 第二個圓的圓心\nradius = 141.4  # 圓的半徑\n\nctx = canvas.getContext("2d")\n\n# === 繪製第一個圓 ===\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.lineWidth = 2\nctx.strokeStyle = "black"\nctx.stroke()\n\n# === 繪製第二個圓 ===\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.lineWidth = 2\nctx.strokeStyle = "black"\nctx.stroke()\n\n# === 繪製正方形框架 ===\n# 第一個正方形\nctx.lineWidth = 2\nctx.strokeStyle = "red"\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.stroke()\n\n# 第二個正方形\nctx.beginPath()\nctx.rect(200, 200, 200, 200)\nctx.stroke() \n \n 3. 圖形上色 \n from browser import html\nfrom browser import document as doc\n\n# 建立 canvas 元素\ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 定義圓心和半徑\nx1, y1 = 200, 200  # 第一個圓的圓心\nx2, y2 = 300, 300  # 第二個圓的圓心\nradius = 141.4  # 外切圓半徑\n\nctx = canvas.getContext("2d")\n\n# === 填充兩個圓的內容 ===\n# 第一個圓填充黃色\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.fillStyle = "mistyrose"\nctx.fill()\n\n# 第二個圓填充淺藍色\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.fillStyle = "lightblue"\nctx.fill()\n\n# 填充方形交疊區域\nctx.beginPath()\nctx.rect(200, 200, 100, 100)\nctx.fillStyle = "orange"\nctx.fill()\n\n# 填充第一個方形其他部分\nctx.beginPath()\nctx.rect(100, 100, 100, 100)\nctx.fillStyle = "blue"\nctx.fill()\n\nctx.beginPath()\nctx.rect(100, 200, 100, 100)\nctx.fillStyle = "darkblue"\nctx.fill()\n\nctx.beginPath()\nctx.rect(200, 100, 100, 100)\nctx.fillStyle = "aqua"\nctx.fill()\n\n# 填充第二個方形其他部分\nctx.beginPath()\nctx.rect(300, 200, 100, 100)\nctx.fillStyle = "coral"\nctx.fill()\n\nctx.beginPath()\nctx.rect(200, 300, 100, 100)\nctx.fillStyle = "red"\nctx.fill()\n\nctx.beginPath()\nctx.rect(300, 300, 100, 100)\nctx.fillStyle = "darkorchid"\nctx.fill()\n\n# === 繪製外切圓與紅色方框邊框 ===\n\n# 繪製第一個外切圓\nctx.lineWidth = 2\nctx.strokeStyle = "black"\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.stroke()\n\n# 繪製第二個外切圓\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.stroke()\n\n# 繪製紅色方框邊框\nctx.strokeStyle = "white"\n\n# 第一個紅色方形\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.stroke()\n\n# 第二個紅色方形\nctx.beginPath()\nctx.rect(200, 200, 200, 200)\nctx.stroke() \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_hw', 'text': '', 'tags': '', 'url': 'w14_hw.html'}, {'title': 'w15', 'text': '題目一: 請利用 Gist 與 Brython 程式環境, 在個人的課程網站中新增一個頁面, 標題為 w15, 以"從 1 累加到 100"作為 anchor 的連結標題, 使用者點擊該連結之後, 可從各自的 Brython 頁面執行程式. \n 從 1 累加到 100 \n \n 題目二: 延伸上題, 設計一個函式 addto(1, 100), 可以完成上述的累加結果. (以"addto"作為連結標題) \n addto \n 題目三: 延伸上題, 設計一個函式 add_only_even(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加結果. 頁面中請以\xa0 add_only_even 作為連結標題. \n add_only_even \n 題目四: 延伸上題, 設計一個函式 add_avoid_8(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加過程, 必須避開數字出現"8"的整數,\xa0頁面中請以\xa0add_avoid_8 作為連結標題. \n add_avoid_8 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '題目: 請以 自己的學號最後四碼 作為繪圖的座標原點, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖座標原點), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (例如: (39, 32)), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像\xa0 \xa0 -   answer_1   - \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n from browser import document, html\nimport math\n\n# 初始化 HTML 畫布\ndef setup_canvas():\n    if not document.querySelector("#my_canvas"):\n        document <= html.CANVAS(id="my_canvas", width=1200, height=900)\n\nsetup_canvas()\ncanvas = document["my_canvas"]\nctx = canvas.getContext("2d")\n\n# 原點座標\norigin_x, origin_y = 32, 22\n\n# 繪製 X 和 Y 軸\nctx.beginPath()\nctx.moveTo(origin_x, origin_y)\nctx.lineTo(750, origin_y)\nctx.moveTo(origin_x, origin_y)\nctx.lineTo(origin_x, 450)\nctx.strokeStyle = "black"\nctx.lineWidth = 2\nctx.stroke()\n\n# 標記原點\nctx.font = "18px Arial"\nctx.fillStyle = "black"\nctx.fillText("(32, 22)", origin_x + 7, origin_y - 7)\n\n# 繪製圖形\ndef draw_hexagon(x, y, size, color):\n    ctx.beginPath()\n    for i in range(6):\n        angle = i * (2 * math.pi / 6)\n        ctx.lineTo(x + size * math.cos(angle), y + size * math.sin(angle))\n    ctx.closePath()\n    ctx.fillStyle = color\n    ctx.fill()\n\ndef draw_diamond(x, y, width, height, color):\n    ctx.beginPath()\n    ctx.moveTo(x, y - height // 2)\n    ctx.lineTo(x + width // 2, y)\n    ctx.lineTo(x, y + height // 2)\n    ctx.lineTo(x - width // 2, y)\n    ctx.closePath()\n    ctx.fillStyle = color\n    ctx.fill()\n\ndef draw_triangle(x1, y1, x2, y2, x3, y3, color):\n    ctx.beginPath()\n    ctx.moveTo(x1, y1)\n    ctx.lineTo(x2, y2)\n    ctx.lineTo(x3, y3)\n    ctx.closePath()\n    ctx.fillStyle = color\n    ctx.fill()\n\ndef draw_circle(x, y, radius, color):\n    ctx.beginPath()\n    ctx.arc(x, y, radius, 0, 2 * math.pi)\n    ctx.fillStyle = color\n    ctx.fill()\n\ndef draw_rectangle(x, y, width, height, color):\n    ctx.beginPath()\n    ctx.rect(x, y, width, height)\n    ctx.fillStyle = color\n    ctx.fill()\n\n# 調用圖形繪製函數\ndraw_hexagon(150, 150, 45, "orange")\ndraw_diamond(240, 150, 60, 90, "teal")\ndraw_triangle(247, 195, 307, 195, 277, 150, "Aqua")\ndraw_circle(345, 150, 45, "red")\ndraw_rectangle(398, 113, 75, 75, "gold")\ndraw_rectangle(480, 135, 90, 30, "Indigo")\n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'w16_exam2', 'text': '題目: 請以 自己的學號最後四碼 作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用\xa0 pixel=2 的藍色直線 ,\xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像).\xa0 \xa0 -   answer_2   - \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n from browser import html\nfrom browser import document as doc\nimport math\n\n\ndef draw_maze(angle_degrees):\n    # 创建和添加画布\n    canvas = html.CANVAS(width=1200, height=1200)\n    brython_div = doc["brython_div1"]\n    brython_div <= canvas\n\n    # 获取绘图上下文\n    ctx = canvas.getContext("2d")\n\n    # 设置绘图参数\n    pixel_scale = 100\n    offset_x = 32 * 2\n    offset_y = 22 * 2\n    # 整体向右移动的偏移量\n    move_right_offset = 200\n    angle_radians = math.radians(angle_degrees)\n\n    # 定义迷宫线条\n    lines = [\n        ((0, 0), (1, 0)),\n        ((2, 0), (5, 0)),\n        ((5, 0), (5, 5)),\n        ((3, 5), (5, 5)),\n        ((4, 5), (4, 3)),\n        ((2, 3), (4, 3)),\n        ((1, 3), (1, 5)),\n        ((3, 3), (3, 2)),\n        ((0, 0), (0, 5)),\n        ((0, 5), (2, 5)),\n        ((2, 5), (2, 4)),\n        ((2, 4), (3, 4)),\n        ((0, 2), (1, 2)),\n        ((2, 2), (2, 1)),\n        ((0, 1), (4, 1)),\n        ((4, 1), (4, 2)),\n    ]\n\n    # 旋转并绘制迷宫线条\n    ctx.strokeStyle = "blue"\n    ctx.lineWidth = 2\n    for line in lines:\n        start = line[0]\n        end = line[1]\n\n        # 旋转起点坐标\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n\n        # 旋转终点坐标\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n\n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + move_right_offset + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + move_right_offset + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n\n    return ctx, offset_x + move_right_offset, offset_y\n\n\ndef label_coordinate(ctx, offset_x, offset_y, text_angle_degrees):\n    text_angle_radians = math.radians(text_angle_degrees)\n    ctx.font = "18px Arial"\n    ctx.fillStyle = "red"\n    # 原始文本位置\n    original_x = offset_x + 10\n    original_y = offset_y - 15\n    # 旋转后的文本位置\n    rotated_x = original_x * math.cos(text_angle_radians) - original_y * math.sin(text_angle_radians)\n    rotated_y = original_x * math.sin(text_angle_radians) + original_y * math.cos(text_angle_radians)\n    ctx.save()\n    ctx.translate(offset_x, offset_y)\n    ctx.rotate(text_angle_radians)\n    ctx.fillText("(32, 22)", 10, - 15)\n    ctx.restore()\n\n\nif __name__ == "__main__":\n    # 调整迷宫角度，这里设置为30度，可以根据需要修改\n    maze_angle = 0\n    # 文本角度\n    text_angle = 0\n    ctx, offset_x, offset_y = draw_maze(maze_angle)\n    label_coordinate(ctx, offset_x, offset_y, text_angle) \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'w16_exam3', 'text': '題目一: 請以 自己的學號最後四碼 作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用\xa0 pixel=2 的黑色直線 ,\xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像, 並且 利用紅色連續線段標示從上方入口, 走至下方出口的路線圖 .\xa0 \xa0 -   answer_3   - \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n from browser import html\nfrom browser import document as doc\nimport math\n\n\ndef draw_maze(angle_degrees):\n    # 创建和添加画布\n    canvas = html.CANVAS(width=1200, height=1200)\n    brython_div = doc["brython_div1"]\n    brython_div <= canvas\n\n    # 获取绘图上下文\n    ctx = canvas.getContext("2d")\n\n    # 设置绘图参数\n    pixel_scale = 100\n    offset_x = 32 * 2\n    offset_y = 22 * 2\n    # 整体向右移动的偏移量\n    move_right_offset = 200\n    angle_radians = math.radians(angle_degrees)\n\n    # 定义迷宫线条\n    lines = [\n        ((0, 0), (1, 0)),\n        ((2, 0), (5, 0)),\n        ((5, 0), (5, 5)),\n        ((3, 5), (5, 5)),\n        ((4, 5), (4, 3)),\n        ((2, 3), (4, 3)),\n        ((1, 3), (1, 5)),\n        ((3, 3), (3, 2)),\n        ((0, 0), (0, 5)),\n        ((0, 5), (2, 5)),\n        ((2, 5), (2, 4)),\n        ((2, 4), (3, 4)),\n        ((0, 2), (1, 2)),\n        ((2, 2), (2, 1)),\n        ((0, 1), (4, 1)),\n        ((4, 1), (4, 2)),\n    ]\n\n    # 旋转并绘制迷宫线条\n    ctx.strokeStyle = "black"\n    ctx.lineWidth = 2\n    for line in lines:\n        start = line[0]\n        end = line[1]\n\n        # 旋转起点坐标\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n\n        # 旋转终点坐标\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n\n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + move_right_offset + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + move_right_offset + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n\n    return ctx, offset_x + move_right_offset, offset_y, pixel_scale\n\n\ndef find_path():\n    # 简单的路径示例，这里假设的路径，实际需要更复杂的算法\n    # 为了维持原本迷宫路线，这里路径假设不破坏迷宫已有路线\n    path = [\n        ((1.5, 0), (1.5, 0.5)),\n        ((1.5, 0.5), (4.5, 0.5)),\n        ((4.5, 0.5), (4.5, 2.5)),\n        ((4.5, 2.5), (3.5, 2.5)),\n        ((3.5, 2.5), (3.5, 1.5)),\n        ((3.5, 1.5), (2.5, 1.5)),\n        ((2.5, 1.5), (2.5, 2.5)),\n        ((2.5, 2.5), (1.5, 2.5)),\n        ((1.5, 2.5), (1.5, 3.5)),\n        ((1.5, 3.5), (3.5, 3.5)),\n        ((3.5, 3.5), (3.5, 4.5)),\n        ((3.5, 4.5), (2.5, 4.5)),\n        ((2.5, 4.5), (2.5, 5))\n    ]\n    return path\n\n\ndef draw_path(ctx, offset_x, offset_y, angle_degrees, path, pixel_scale):\n    angle_radians = math.radians(angle_degrees)\n    ctx.strokeStyle = "red"\n    ctx.lineWidth = 2\n    for line in path:\n        start = line[0]\n        end = line[1]\n\n        # 旋转起点坐标\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n\n        # 旋转终点坐标\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n\n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n\n\ndef label_coordinate(ctx, offset_x, offset_y, text_angle_degrees):\n    text_angle_radians = math.radians(text_angle_degrees)\n    ctx.font = "18px Arial"\n    ctx.fillStyle = "red"\n    # 原始文本位置\n    original_x = offset_x + 10\n    original_y = offset_y - 15\n    # 旋转后的文本位置\n    rotated_x = original_x * math.cos(text_angle_radians) - original_y * math.sin(text_angle_radians)\n    rotated_y = original_x * math.sin(text_angle_radians) + original_y * math.cos(text_angle_radians)\n    ctx.save()\n    ctx.translate(offset_x, offset_y)\n    ctx.rotate(text_angle_radians)\n    ctx.fillText("(32, 22)", 10, - 15)\n    ctx.restore()\n\n\nif __name__ == "__main__":\n    # 调整迷宫角度，这里设置为30度，可以根据需要修改\n    maze_angle = 0\n    # 文本角度\n    text_angle = 0\n    ctx, offset_x, offset_y, pixel_scale = draw_maze(maze_angle)\n    path = find_path()\n    draw_path(ctx, offset_x, offset_y, maze_angle, path, pixel_scale)\n    label_coordinate(ctx, offset_x, offset_y, text_angle) \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'W7', 'text': "今天(10/9)的金字塔指令如下 十層金字塔 \n # 設定金字塔的高度\nheight = 10\n\n# 迴圈生成金字塔\nfor i in range(height):\n    # 每層的空格數量\n    spaces = '\u3000' * (height - i - 1)\n    # 每層的星號數量\n    stars = '＊' * (2 * i + 1)\n    # 輸出每層\n    print(spaces + stars) \n \n", 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '\n \n \n \n \n \n \n \n \n 操作步驟: \n \n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 ) \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \n \n \n \n \n \n \n \n \n \n \xa0 \n \n \n \n \n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};