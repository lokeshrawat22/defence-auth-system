<?php
require 'auth-verify.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Indian Airforce</title>

<style>

body{
  margin:0;
  font-family: Arial, Helvetica, sans-serif;
  background:#071a2f;
  color:white;
  padding:24px;
}
.glass{
  background:rgba(255,255,255,0.08);
  border:1px solid #38bdf8;
  border-radius:14px;
  backdrop-filter: blur(10px);
}

.topbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 24px;
  margin-bottom:25px;
}

.logout{
  background:#38bdf8;
  padding:8px 16px;
  border-radius:6px;
  text-decoration:none;
  color:white;
  font-weight:bold;
}

.hero{
  overflow:hidden;
  border-radius:18px;
  margin-bottom:25px;
}

.hero img{
  width:100%;
  height:340px;
  object-fit:cover;
}

.hero-text{
  margin-top:-120px;
  padding:24px;
  background:linear-gradient(to top,#071a2f,transparent);
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:20px;
  margin-bottom:25px;
}

.card{
  padding:24px;
}

.small{
  color:#cbd5e1;
  font-size:14px;
}

.stat-number{
  font-size:32px;
  color:#38bdf8;
  font-weight:bold;
  text-align:center;
}

.center{
  text-align:center;
}

</style>
</head>

<body>


<div class="glass topbar">
  <h2>✈ WELCOME, <?= strtoupper($_SESSION['user']['username']) ?></h2>

  <a class="logout" href="logout.php">Logout</a>
</div>


<div class="glass hero">
  <img  src="https://i0.wp.com/airpowerasia.com/wp-content/uploads/2026/01/chatgpt-image-jan-16-2026-10_46_00-pm-1.png?fit=1200%2C800&ssl=1">

  <div class="hero-text">
    <h1 style="color:#38bdf8;">INDIAN AIR FORCE: TOUCH THE SKY WITH GLORY</h1>
    <p class="small">Guardians of the Indian Airspace</p>
  </div>
</div>


<div class="grid">

  <div class="glass card">
    <h3 style="color:#38bdf8;">ABOUT THE INDIAN AIR FORCE</h3>

    <p class="small">
      Founded in 1932, the Indian Air Force is the air arm of the Indian Armed Forces.
      It secures Indian airspace, conducts aerial warfare, strategic transport,
      reconnaissance, and humanitarian missions using advanced fighter jets,
      transport aircraft, helicopters, and UAV systems.
    </p>
  </div>

  <div class="glass card">
    <h3 style="color:#38bdf8;">MISSION & VISION</h3>

    <p class="small"><b>MISSION:</b> Safeguard Indian airspace and project air power.</p>

    <p class="small"><b>VISION:</b> Modern, agile & combat-ready aerospace force.</p>

    <p class="small" style="margin-top:10px;">
      <b>Organisation:</b> <?= $_SESSION['user']['organisation'] ?>
    </p>
  </div>

</div>


<div class="glass card">

  <h3 class="center" style="color:#38bdf8;margin-bottom:25px;">
    GLOBAL AIR POWER STATUS
  </h3>

  <div class="grid center">

    <div>
      <p class="small">ACTIVE PERSONNEL</p>
      <div class="stat-number">170,000+</div>
    </div>

    <div>
      <p class="small">COMBAT AIRCRAFT</p>
      <div class="stat-number">600+</div>
    </div>

    <div>
      <p class="small">AIR BASES</p>
      <div class="stat-number">60+</div>
    </div>

  </div>

</div>

</body>
</html>
