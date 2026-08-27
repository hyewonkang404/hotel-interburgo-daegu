let currentSlide = 0;
let totalSlides = 0;
let currentImgIndex = 0;
let currentImgList = [];

window.onload = () => {
    buildArchitectLayout();
    [5, 6, 7, 8, 9].forEach(floorNo => {
        renderMapForFloor(floorNo);
    });
};

const floorData = {
    5: {
        title: "5TH FLOOR",
        riverRooms: [5101, 5102, 5103, 5105, 5106, 5107, 5108, 5109, 5110, 5111, 5112, 5113, 5115, 5116, 5117, 5118, 5119, 5120, 5121, 5122, 5123, 5125, 5126, 5127, 5128],
        parkRooms: [
            {no: 5159, type: "IES", info: "King Bed\n욕실타입 : 샤워부스"}, {no: 5158, type: "IDD", info: "Handicapped Room"}, 
            {no: 5157, type: "IDT", info: "2 Single Beds"}, {no: 5156, type: "IDT", info: "2 Single Beds"}, {no: 5155, type: "IDT", info: "2 Single Beds"}, 
            {no: 5153, type: "IDT", info: "2 Single Beds"}, {no: 5152, type: "IDT", info: "2 Single Beds"}, {no: 5151, type: "IDT", info: "2 Single Beds"}, 
            {no: 5150, type: "IDT", info: "2 Single Beds"}, {no: 5139, type: "IDT", info: "2 Single Beds"}, {no: 5138, type: "IDT", info: "2 Single Beds"}, 
            {no: 5137, type: "IDT", info: "2 Single Beds"}, {no: 5136, type: "IDT", info: "2 Single Beds"}, {no: 5135, type: "IJS", info: "Double Bed\n욕실타입 : 욕조"},
            {no: 5133, type: "ISD", info: "Double Bed"}, {no: 5132, type: "ISD", info: "Double Bed"}, {no: 5131, type: "ISD", info: "Double Bed"}, 
            {no: 5130, type: "ISD", info: "Double Bed"}, {no: 5129, type: "ISD", info: "Double Bed"}
        ]
    },
    6: {
        title: "6TH FLOOR",
        riverRooms: [6101, 6102, 6103, 6105, 6106, 6107, 6108, 6109, 6110, 6111, 6112, 6113, 6115, 6116, 6117, 6118, 6119, 6120, 6121, 6122, 6123, 6125, 6126, 6127, 6128],
        parkRooms: [
            {no: 6159, type: "IES", info: "King Bed\n욕실타입 : 샤워부스"}, {no: 6158, type: "IDD", info: "Handicapped Room"}, 
            {no: 6157, type: "IDT", info: "2 Single Beds"}, {no: 6156, type: "IDT", info: "2 Single Beds"}, {no: 6155, type: "IDT", info: "2 Single Beds"}, 
            {no: 6153, type: "IDT", info: "2 Single Beds"}, {no: 6152, type: "IDT", info: "2 Single Beds"}, {no: 6151, type: "IDT", info: "2 Single Beds"}, 
            {no: 6150, type: "IDT", info: "2 Single Beds"}, {no: 6139, type: "IDT", info: "2 Single Beds"}, {no: 6138, type: "IDT", info: "2 Single Beds"}, 
            {no: 6137, type: "IDT", info: "2 Single Beds"}, {no: 6136, type: "IDT", info: "2 Single Beds"}, {no: 6135, type: "IJS", info: "King Bed\n욕실타입 : 욕조"},
            {no: 6133, type: "ISD", info: "Double Bed"}, {no: 6132, type: "ISD", info: "Double Bed"}, {no: 6131, type: "ISD", info: "Double Bed"}, 
            {no: 6130, type: "ISD", info: "Double Bed"}, {no: 6129, type: "ISD", info: "Double Bed"}
        ]
    },
    7: {
        title: "7TH FLOOR",
        riverRooms: [
            {no: 7101, type: "IDT", info: "2 Single Beds"}, {no: 7102, type: "IDT", info: "2 Single Beds"}, {no: 7103, type: "IDT", info: "2 Single Beds"}, 
            {no: 7105, type: "IDT", info: "2 Single Beds"}, {no: 7106, type: "IDT", info: "2 Single Beds"}, {no: 7107, type: "IDT", info: "2 Single Beds"}, 
            {no: 7108, type: "IDT", info: "2 Single Beds"}, {no: 7109, type: "IDT", info: "2 Single Beds"}, {no: 7110, type: "IDT", info: "2 Single Beds"}, 
            {no: 7111, type: "IDD", info: "Queen Bed"}, {no: 7112, type: "IDD", info: "Queen Bed"}, 
            {no: 7113, type: "IDT", info: "2 Single Beds"}, {no: 7115, type: "IDT", info: "2 Single Beds"}, {no: 7116, type: "IDT", info: "2 Single Beds"}, 
            {no: 7117, type: "IDT", info: "2 Single Beds"}, {no: 7118, type: "IDT", info: "2 Single Beds"}, {no: 7119, type: "IDT", info: "2 Single Beds"}, 
            {no: 7120, type: "IDT", info: "2 Single Beds"}, {no: 7121, type: "IDT", info: "2 Single Beds"}, {no: 7122, type: "IDT", info: "2 Single Beds"}, 
            {no: 7123, type: "IDT", info: "2 Single Beds"}, {no: 7125, type: "IDT", info: "2 Single Beds"}, {no: 7126, type: "IDT", info: "2 Single Beds"}, 
            {no: 7127, type: "IDT", info: "2 Single Beds"}, {no: 7128, type: "IDT", info: "2 Single Beds"}
        ],
        parkRooms: [
            {no: 7159, type: "IES", info: "King Bed\n욕실타입 : 샤워부스"}, 
            {no: 7158, type: "IDT", info: "2 Single Beds"}, {no: 7157, type: "IDT", info: "2 Single Beds"}, {no: 7156, type: "IDT", info: "2 Single Beds"}, 
            {no: 7155, type: "IDT", info: "2 Single Beds"}, {no: 7153, type: "IDT", info: "2 Single Beds"}, {no: 7152, type: "IDT", info: "2 Single Beds"}, 
            {no: 7151, type: "IDT", info: "2 Single Beds"}, {no: 7150, type: "IDT", info: "2 Single Beds"}, {no: 7139, type: "IDT", info: "2 Single Beds"}, 
            {no: 7138, type: "IDT", info: "2 Single Beds"}, {no: 7137, type: "IDT", info: "2 Single Beds"}, {no: 7136, type: "IDT", info: "2 Single Beds"}, 
            {no: 7135, type: "IJS", info: "King Bed\n욕실타입 : 욕조"}, 
            {no: 7133, type: "ISD", info: "Double Bed"}, {no: 7132, type: "ISD", info: "Double Bed"}, {no: 7131, type: "ISD", info: "Double Bed"}, 
            {no: 7130, type: "ISD", info: "Double Bed"}, {no: 7129, type: "ISD", info: "Double Bed"}
        ]
    },
    8: {
        title: "8TH FLOOR",
        riverRooms: [
            {no: 8101, type: "IFT", info: "Double + Single"}, {no: 8102, type: "IFT", info: "Double + Single"}, {no: 8103, type: "IFT", info: "Double + Single"}, 
            {no: 8105, type: "IFT", info: "Double + Single"}, {no: 8106, type: "IFT", info: "Double + Single"}, {no: 8107, type: "IFT", info: "Double + Single"}, 
            {no: 8108, type: "IFT", info: "Double + Single"}, {no: 8109, type: "IFT", info: "Double + Single"}, {no: 8110, type: "IFT", info: "Double + Single"}, 
            {no: 8111, type: "IDD", info: "Queen Bed"}, {no: 8112, type: "IDD", info: "Queen Bed"}, {no: 8113, type: "IDD", info: "Queen Bed"},
            {no: 8115, type: "IDD", info: "Queen Bed"}, {no: 8116, type: "IDD", info: "Queen Bed"}, {no: 8117, type: "IDD", info: "Queen Bed"}, 
            {no: 8118, type: "IDD", info: "Queen Bed"}, {no: 8119, type: "IDD", info: "Queen Bed"}, {no: 8120, type: "IDD", info: "Queen Bed"}, 
            {no: 8121, type: "IDD", info: "Queen Bed"}, {no: 8122, type: "IDD", info: "Queen Bed"}, {no: 8123, type: "IDD", info: "Queen Bed"}, 
            {no: 8125, type: "IDD", info: "Queen Bed"}, {no: 8126, type: "IDS", info: "King Bed\n욕실타입 : 욕조"}],
        parkRooms: [
            {no: 8155, type: "IFS", info: "1 Double + 2 Singles"}, {no: 8153, type: "IFT", info: "Double + Single"}, {no: 8152, type: "IFT", info: "Double + Single"}, 
            {no: 8151, type: "IFT", info: "Double + Single"}, {no: 8150, type: "ISS", info: "King Bed\n욕실타입 : 욕조"}, {no: 8139, type: "IFT", info: "Double + Single"},
            {no: 8138, type: "IFT", info: "Double + Single"}, 
            {no: 8137, type: "IFT", info: "Double + Single"}, {no: 8136, type: "IFT", info: "Double + Single"}, {no: 8135, type: "IFT", info: "Double + Single"}, {no: 8133, type: "IFT", info: "Double + Single"}, {no: 8132, type: "IJS", info: "King Bed\n욕실타입 : 욕조"}, {no: 8131, type: "ISD", info: "Double Bed"}, {no: 8130, type: "ISD", info: "Double Bed"}, {no: 8129, type: "ISD", info: "Double Bed"}, {no: 8128, type: "ISD", info: "Double Bed"}, {no: 8127, type: "ISD", info: "Double Bed"}
        ]
    },
    9: {
        title: "9TH FLOOR",
        riverRooms: [
            {no: 9101, type: "IPD", info: "Queen Bed"}, {no: 9102, type: "IPD", info: "Queen Bed"}, {no: 9103, type: "IPD", info: "Queen Bed"}, 
            {no: 9105, type: "IPD", info: "Queen Bed"}, {no: 9106, type: "IPD", info: "Queen Bed"}, {no: 9107, type: "IPD", info: "Queen Bed"}, 
            {no: 9108, type: "IPD", info: "Queen Bed"}, {no: 9109, type: "IPD", info: "Queen Bed"}, {no: 9110, type: "IPD", info: "Queen Bed"}, 
            {no: 9111, type: "IPD", info: "Queen Bed"}, {no: 9112, type: "IPD", info: "Queen Bed"}, {no: 9113, type: "IPD", info: "Queen Bed"},
            {no: 9115, type: "IPD", info: "Queen Bed"}, {no: 9116, type: "IPD", info: "Queen Bed"}, {no: 9117, type: "IPD", info: "Queen Bed"}, 
            {no: 9118, type: "IPD", info: "Queen Bed"}, {no: 9119, type: "IPD", info: "Queen Bed"}, {no: 9120, type: "IPD", info: "Queen Bed"}, 
            {no: 9121, type: "IPD", info: "Queen Bed"}, {no: 9122, type: "IPD", info: "Queen Bed"}, {no: 9123, type: "IPD", info: "Queen Bed"}, 
            {no: 9125, type: "IPD", info: "Queen Bed"}
        ],
        parkRooms: [
            {no: 9152, type: "IES", info: "King Bed\n욕실타입 : 샤워부스"}, {no: 9151, type: "IDD", info: "Queen Bed"}, {no: 9150, type: "IDD", info: "Queen Bed"},
            {no: 9139, type: "IDD", info: "Queen Bed"}, {no: 9138, type: "IDD", info: "Queen Bed"}, {no: 9137, type: "ISS", info: "King Bed\n욕실타입 : 욕조"}, {no: 9136, type: "IDT", info: "2 Single Beds"}, {no: 9135, type: "IDT", info: "2 Single Beds"}, {no: 9133, type: "IDT", info: "2 Single Beds"}, {no: 9132, type: "IDD", info: "Queen Bed"}, {no: 9131, type: "IDD", info: "Queen Bed"}, {no: 9130, type: "IDD", info: "Queen Bed"}, {no: 9129, type: "IJS", info: "King Bed\n욕실타입 : 욕조"}, {no: 9128, type: "ISD", info: "Double Bed"}, {no: 9127, type: "ISD", info: "Double Bed"}, {no: 9126, type: "IPS", info: "King Bed\n욕실타입 : 월풀"}
        ]
    }
};

function openFloor(floorId, btn) {
    document.querySelectorAll('.floor-plan').forEach(plan => plan.classList.remove('active'));
    document.querySelectorAll('sidebar .menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(floorId).classList.add('active');
    if (btn) btn.classList.add('active');
}

function openHotelFloor(floorNo, btn) {
    document.querySelectorAll('.floor-plan').forEach(plan => plan.classList.remove('active'));
    document.querySelectorAll('sidebar .menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`hotel-view-${floorNo}`).classList.add('active');
    if (btn) btn.classList.add('active');
}

function renderMapForFloor(floorNo) {
    const data = floorData[floorNo];
    if (!data) return;

    const riverContainer = document.getElementById(`riverView-${floorNo}`);
    const parkContainer = document.getElementById(`parkView-${floorNo}`);
    if (!riverContainer || !parkContainer) return;

    riverContainer.innerHTML = '';
    parkContainer.innerHTML = '';

    const wideTypes = ["ISS", "IFS", "IDS", "IPS"];
    let totalAngleSpan = 0;
    
    data.riverRooms.forEach((roomItem, idx) => {
        if (idx === data.riverRooms.length - 1) return;
        const isObject = typeof roomItem === 'object';
        const defaultType = (isObject ? roomItem.no : roomItem) >= 9100 ? "IPD" : "IDT";
        const roomData = isObject ? roomItem : { type: defaultType };
        const isWide = wideTypes.includes(roomData.type.toUpperCase());
        totalAngleSpan += isWide ? 9.7 : 5.2;
    });

    let currentAngle = -(totalAngleSpan / 2); 

    data.riverRooms.forEach((roomItem) => {
        const isObject = typeof roomItem === 'object';
        const defaultType = (isObject ? roomItem.no : roomItem) >= 9100 ? "IPD" : "IDT";
        const roomData = isObject ? roomItem : { no: roomItem, type: defaultType, info: "2 Single Beds" };
        
        const roomNumStr = String(roomData.no);
        const lastTwoDigits = parseInt(roomNumStr.slice(-2), 10);

        const room = document.createElement('div');
        room.className = 'room curve-room';

        // 객실 번호에 따른 PARK / RIVER VIEW 구분 클래스 (이전에 정의된 내용 유지)
        if (lastTwoDigits >= 1 && lastTwoDigits <= 16) {
            room.classList.add('park-view-zone-room');
        } else if (lastTwoDigits >= 17 && lastTwoDigits <= 28) {
            room.classList.add('river-view-zone-room');
        }

        const upperType = roomData.type.toUpperCase();
        const isWide = wideTypes.includes(upperType);

        if (upperType.endsWith('S')) room.classList.add(`type-${upperType.toLowerCase()}`);
        if (isWide) room.classList.add('wide-room');

        room.innerHTML = `<span>${roomData.type}</span><span>${roomData.no}</span>`;
        
        if (isWide) currentAngle += 1.5; 
        room.style.transform = `rotate(${currentAngle}deg)`;
        currentAngle += isWide ? 9.2 : 5.4; 

        room.onclick = () => showHotelInfoModal(roomData); 
        riverContainer.appendChild(room);
    });

    let currentX = 0; 
    data.parkRooms.forEach((roomData) => {
        const room = document.createElement('div');
        room.className = `room park-room`;
        const upperType = roomData.type.toUpperCase();
        if (upperType.endsWith('S')) room.classList.add(`type-${upperType.toLowerCase()}`);
        
        const isWide = wideTypes.includes(upperType);
        if (isWide) room.classList.add('wide-room');

        room.innerHTML = `<span>${roomData.type}</span><span>${roomData.no}</span>`;
        room.style.left = `${currentX}px`; 
        currentX += isWide ? 80 : 40; 

        room.onclick = () => showHotelInfoModal(roomData); 
        parkContainer.appendChild(room);
    });
}

function showHotelInfoModal(roomData) {
    document.getElementById('room-no').innerText = `Room No. ${roomData.no}`;
    document.getElementById('room-type-display').innerText = `Type: ${roomData.type}`;
    document.getElementById('room-info').innerText = `Details: ${roomData.info || " "}`;
    
    const track = document.getElementById('slider-track');
    const dotsContainer = document.getElementById('slider-dots');
    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    currentSlide = 0; 
    totalSlides = 0; 

    if (roomData.type) {
        const imageType = roomData.type.toLowerCase();
        let loadedCount = 0;

        for (let i = 1; i <= 5; i++) {
            const testImg = new Image();
            const srcPath = `images/${imageType}_${i}.jpg`;

            testImg.onload = function() {
                loadedCount++;
                totalSlides = loadedCount;

                const img = document.createElement('img');
                img.src = srcPath;
                img.className = "slider-img";
                track.appendChild(img);

                const dot = document.createElement('span');
                dot.className = `dot ${loadedCount === 1 ? 'active' : ''}`;
                const idx = loadedCount - 1;
                dot.onclick = () => jumpToSlide(idx);
                dotsContainer.appendChild(dot);

                updateHotelSlider();
            };
            testImg.src = srcPath;
        }
    }
    document.getElementById('info-modal').classList.remove('hidden');
}

function moveHotelSlide(direction) {
    if (totalSlides <= 1) return; 
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateHotelSlider();
}

function jumpToSlide(index) {
    currentSlide = index;
    updateHotelSlider();
}

function updateHotelSlider() {
    const track = document.getElementById('slider-track');
    if (!track) return;
    track.style.transform = `translateX(-${currentSlide * 260}px)`;
    
    document.querySelectorAll('.slider-dots .dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });
}

function closeHotelModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

function showPvModal(num, type, desc, imgList) {
    document.getElementById('modalNum').innerText = num;
    document.getElementById('modalType').innerText = type;
    document.getElementById('modalDesc').innerText = desc || '정보 없음';
    
    currentImgList = imgList || [];
    currentImgIndex = 0;
    renderPvImage();
    document.getElementById('roomModal').style.display = 'block';
}

function renderPvImage() {
    const modalImg = document.getElementById('modalImg');
    if (currentImgList.length > 0) {
        modalImg.src = currentImgList[currentImgIndex];
        modalImg.style.display = 'block';
    } else {
        modalImg.style.display = 'none';
    }
}

function movePvSlide(direction) {
    if (currentImgList.length === 0) return;
    currentImgIndex = (currentImgIndex + direction + currentImgList.length) % currentImgList.length;
    renderPvImage();
}

function closePvModal() { 
    document.getElementById('roomModal').style.display = 'none'; 
}

const complexFloorData = {
    'dynamic-grid-3f': [
        { num: '3010', type: 'pst', r: 15, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3011', type: 'pes', r: 16, c: 4, d: '1 Double + 2 Singles', img: ['images/pes_1.jpg', 'images/pes_2.jpg'] }, 
        { num: '3012', type: 'pst', r: 16, c: 2, d: '1 Double + 1 Single', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3013', type: 'pst', r: 15, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3009', type: 'pst', r: 14, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3015', type: 'pst', r: 14, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3008', type: 'pst', r: 13, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3016', type: 'pst', r: 13, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3007', type: 'psd', r: 12, c: 4, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] }, 
        { num: '3017', type: 'psd', r: 12, c: 2, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] },
        { num: '3006', type: 'psd', r: 11, c: 4, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] }, 
        { num: '3018', type: 'pst', r: 11, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3005', type: 'pst', r: 8, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },  
        { num: '3019', type: 'pst', r: 10, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3003', type: 'pst', r: 7, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },  
        { num: '3020', type: 'pst', r: 9, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3002', type: 'pst', r: 6, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },  
        { num: '3021', type: 'pst', r: 8, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3001', type: 'pst', r: 5, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },  
        { num: '3022', type: 'pst', r: 7, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3023', type: 'pst', r: 6, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3025', type: 'pst', r: 5, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3026', type: 'pst', r: 4, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3027', type: 'psd', r: 3, c: 2, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] },
        { num: '3028', type: 'pst', r: 2, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3029', type: 'pfs', r: 1, c: 2, d: '1 Double + 2 Singles', img: ['images/pfs_1.jpg', 'images/pfs_2.jpg'] },
        { num: '3030', type: 'pst', r: 1, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3031', type: 'pst', r: 1, c: 5, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, 
        { num: '3032', type: 'pst', r: 1, c: 6, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '3033', type: 'plt', r: 1, c: 7, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3035', type: 'plt', r: 1, c: 8, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3036', type: 'plt', r: 1, c: 9, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3037', type: 'plt', r: 1, c: 10, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3038', type: 'plt', r: 1, c: 11, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3039', type: 'plt', r: 1, c: 12, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3050', type: 'plt', r: 1, c: 13, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3051', type: 'plt', r: 1, c: 14, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3052', type: 'plt', r: 1, c: 15, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3053', type: 'plt', r: 1, c: 16, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3066', type: 'plt', r: 4, c: 6, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3065', type: 'plt', r: 4, c: 7, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3063', type: 'plt', r: 4, c: 8, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3062', type: 'plt', r: 4, c: 9, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3061', type: 'plt', r: 4, c: 10, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3060', type: 'plt', r: 4, c: 11, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3059', type: 'plt', r: 4, c: 12, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3058', type: 'plt', r: 4, c: 13, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3057', type: 'plt', r: 4, c: 14, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] },
        { num: '3056', type: 'plt', r: 4, c: 15, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }, 
        { num: '3055', type: 'plt', r: 4, c: 16, d: '2 Double Beds', img: ['images/plt.jpg', 'images/plt_2.jpg'] }
    ],
    'dynamic-grid-5f': [
        { num: '5011', type: 'psd', r: 17, c: 4, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] }, { num: '5012', type: 'pst', r: 17, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5010', type: 'pst', r: 16, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5013', type: 'pst', r: 16, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5009', type: 'pst', r: 15, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5015', type: 'pst', r: 15, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5008', type: 'pst', r: 14, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5016', type: 'pst', r: 14, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5007', type: 'pst', r: 13, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5017', type: 'pst', r: 13, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5006', type: 'psd', r: 12, c: 4, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] }, { num: '5018', type: 'pst', r: 12, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5005', type: 'pst', r: 9, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5019', type: 'pst', r: 11, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5003', type: 'pst', r: 8, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5020', type: 'pst', r: 10, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5002', type: 'pst', r: 7, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5021', type: 'pst', r: 9, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5001', type: 'pst', r: 6, c: 4, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5022', type: 'pst', r: 8, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5023', type: 'pst', r: 7, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5025', type: 'pst', r: 6, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5026', type: 'pst', r: 5, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5027', type: 'pst', r: 4, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5028', type: 'pst', r: 3, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] }, { num: '5029', type: 'pst', r: 2, c: 2, d: '2 Single Beds', img: ['images/pst_1.jpg', 'images/pst_2.jpg'] },
        { num: '5031', type: 'psd', r: 1, c: 4, d: 'Double Bed', img: ['images/psd_1.jpg', 'images/psd_2.jpg'] }, { num: '5030', type: 'pds', r: 1, c: 2, d: '대표님객실' },
        { num: '5032', type: 'pbn', r: 1, c: 7, d: '\n층 타입 : 단층\n침대타입 : King Bed\n욕실타입 : 샤워부스', img: ['images/5032_1.jpg'] }, 
        { num: '5033', type: 'pbd', r: 1, c: 9, d: '\n층 타입 : 복층\n침대타입 : King Bed + 복층에 2 Single Beds\n욕실타입 : 샤워부스', img: ['images/5033_1.jpg'] },
        { num: '5035', type: 'pbd', r: 1, c: 11, d: '\n층 타입 : 복층\n침대타입 : King Bed + 복층에 2 Single Beds\n욕실타입 : 샤워부스', img: ['images/5033_1.jpg'] }, 
        { num: '5036', type: 'pbl', r: 1, c: 13, d: '\n층 타입 : 복층\n침대타입 : King Bed\n욕실타입 : 월풀', img: ['images/5036_1.jpg'] },
        { num: '5037', type: 'pbd', r: 4, c: 13, d: '\n층 타입 : 복층\n침대타입 : King Bed + 복층에 2 Single Beds\n욕실타입 : 샤워부스', img: ['images/5037_1.jpg'] }, 
        { num: '5038', type: 'pbd', r: 4, c: 11, d: '\n층 타입 : 복층\n침대타입 : King Bed + 복층에 2 Single Beds\n욕실타입 : 샤워부스', img: ['images/5038_1.jpg'] },
        { num: '5039', type: 'pbs', r: 4, c: 9, d: '\n층 타입 : 단층\n침대타입 : 2 Single Beds\n욕실타입 : 욕조', img: ['images/5039_1.jpg'] }, 
        { num: '5050', type: 'pbr', r: 4, c: 7, d: '\n층 타입 : 복층\n침대타입 : 2 Double Beds\n욕실타입 : 월풀', img: ['images/5050_1.jpg'] }
    ],
    'dynamic-grid-6f': [
        { num: '6010', type: 'pbn', r: 1, c: 2, d: '\n층 타입 : 단층\n침대타입 : King Bed\n욕실타입 : 샤워부스', img: ['images/6010_1.jpg'] }, 
        { num: '6009', type: 'pbs', r: 3, c: 2, d: '\n층 타입 : 복층\n침대타입 : King Bed\n욕실타입 : 샤워부스', img: ['images/6009_1.jpg'] },
        { num: '6008', type: 'pbp', r: 5, c: 2, d: '\n층 타입 : 단층\n침대타입 : King Bed\n욕실타입 : 월풀', img: ['images/6008_1.jpg'] }, 
        { num: '6007', type: 'pbp', r: 7, c: 2, d: '\n층 타입 : 복층\n침대타입 : King Bed\n욕실타입 : 월풀', img: ['images/6007_1.jpg'] },
        { num: '6006', type: 'pbp', r: 9, c: 2, d: '\n층 타입 : 복층\n침대타입 : King Bed\n욕실타입 : 월풀', img: ['images/6006_1.jpg'] },
        { num: '6001', type: 'pbs', r: 2, c: 4, d: '\n층 타입 : 복층\n침대타입 : 2 Single Beds\n욕실타입 : 샤워부스', img: ['images/6001_1.jpg'] }, 
        { num: '6002', type: 'pbs', r: 4, c: 4, d: '\n층 타입 : 복층\n침대타입 : 2 Single Beds\n욕실타입 : 샤워부스', img: ['images/6001_1.jpg'] },
        { num: '6003', type: 'pbd', r: 7, c: 4, d: '\n층 타입 : 단층\n침대타입 : King Bed\n욕실타입 : 욕조', img: ['images/6003_1.jpg'] }, 
        { num: '6005', type: 'pbp', r: 9, c: 4, d: '\n층 타입 : 복층\n침대타입 : 2 Single Beds\n욕실타입 : 욕조', img: ['images/6005_1.jpg'] }
    ]
};

function buildArchitectLayout() {
    for (const [gridId, rooms] of Object.entries(complexFloorData)) {
        const targetGrid = document.getElementById(gridId);
        if (!targetGrid) continue;
        
        rooms.forEach(room => {
            const card = document.createElement('div');
            card.className = `room-card ${room.type}`;
            card.onclick = () => showPvModal(room.num, room.type.toUpperCase(), room.d, room.img);
            
            if (gridId === 'dynamic-grid-5f' || gridId === 'dynamic-grid-6f') {
                if (['pbn', 'pbs', 'pbd', 'pbl', 'pbr', 'pbp'].includes(room.type)) {
                    card.classList.add('large-room');
                }
            }
            
            card.style.gridRow = room.r;
            card.style.gridColumn = room.c;
            card.innerHTML = `<div class="rn">${room.num}</div><div class="rt">${room.type.toUpperCase()}</div>`;
            targetGrid.appendChild(card);
        });
    }
}

window.onclick = function(event) {
    if (event.target === document.getElementById('info-modal')) closeHotelModal();
    if (event.target === document.getElementById('roomModal')) closePvModal();
};
// 네비게이션바 토글 기능
function toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    sidebar.classList.toggle('open');
}

// 모바일 환경에서 메뉴 선택 시 사이드바 자동 닫기
function checkMobileClose() {
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('app-sidebar');
        sidebar.classList.remove('open');
    }
}
