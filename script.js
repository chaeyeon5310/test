<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Step 1: 출발점 진단</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .phone-container {
            max-width: 400px;
            margin: 0 auto;
            border: 2px solid #333;
            border-radius: 40px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #FFA500;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 20px;
            margin-bottom: 20px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            padding: 10px;
        }
        .dan-button {
            padding: 20px;
            border: none;
            border-radius: 10px;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            color: white;
        }
        #dan1 { background-color: #FF6B6B; }
        #dan2 { background-color: #FF9F40; }
        #dan3 { background-color: #FFE135; }
        #dan4 { background-color: #4CD964; }
        #dan5 { background-color: #0066FF; }
        #dan6 { background-color: #2E2EFE; }
        #dan7 { background-color: #9B59B6; }
        #dan8 { background-color: #FFE4E1; }
        #dan9 { background-color: #5CD1E5; }
        #danAll { background-color: #FFB6C1; }
        .problem-page {
            display: none;
            padding: 20px;
        }
        .problem-header {
            background-color: #2E2EFE;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 20px;
            margin-bottom: 20px;
        }
        .problem-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .problem-item {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .problem-item input {
            width: 60px;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
        .submit-btn {
            background-color: #FF69B4;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            margin-top: 20px;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="phone-container">
        <!-- 단 선택 페이지 -->
        <div id="selection-page">
            <div class="header">STEP 1. 출발점 진단</div>
            <div class="grid-container">
                <button class="dan-button" id="dan1">1단</button>
                <button class="dan-button" id="dan2">2단</button>
                <button class="dan-button" id="dan3">3단</button>
                <button class="dan-button" id="dan4">4단</button>
                <button class="dan-button" id="dan5">5단</button>
                <button class="dan-button" id="dan6">6단</button>
                <button class="dan-button" id="dan7">7단</button>
                <button class="dan-button" id="dan8">8단</button>
                <button class="dan-button" id="dan9">9단</button>
                <button class="dan-button" id="danAll">1~9단</button>
            </div>
        </div>
        <!-- 문제 페이지 -->
        <div id="problem-page" class="problem-page">
            <div class="problem-header">
                <span id="current-dan">6단</span>
            </div>
            <div class="problem-list" id="problem-list">
                <!-- 문제들이 JavaScript로 동적 생성됨 -->
            </div>
            <button class="submit-btn" id="submit-btn">제출</button>
        </div>
    </div>
    <script src="step1.js"></script>
</body>
</html>
