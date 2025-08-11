"use client";
import { useState } from "react";
import Link from "next/link";

// 📌 Données regroupées de toutes les wilayas
// 📌 Données regroupées de toutes les wilayas
const allCommunes = [
  // --- أدرار ---
  { id: 22, commune_name: "تيمقتن", daira_name: "أولف", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 6, commune_name: "بودة", daira_name: "أدرار", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 13, commune_name: "أولاد أحمد تيمي", daira_name: "أدرار", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 1, commune_name: "أدرار", daira_name: "أدرار", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 9, commune_name: "فنوغيل", daira_name: "فنوغيل", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 10, commune_name: "إن زغمير", daira_name: "زاوية كنتة", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 16, commune_name: "رقان", daira_name: "رقان", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 17, commune_name: "سالي", daira_name: "رقان", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 18, commune_name: "السبع", daira_name: "تسابيت", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 27, commune_name: "تسابيت", daira_name: "تسابيت", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 21, commune_name: "تامست", daira_name: "فنوغيل", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 20, commune_name: "تامنطيط", daira_name: "فنوغيل", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 26, commune_name: "تيت", daira_name: "أولف", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 28, commune_name: "زاوية كنتة", daira_name: "زاوية كنتة", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 2, commune_name: "اقبلي", daira_name: "أولف", wilaya_code: "01", wilaya_name: "أدرار" },
  { id: 4, commune_name: "أولف", daira_name: "أولف", wilaya_code: "01", wilaya_name: "أدرار" },

  // --- الشلف ---
  
  { id: 60, commune_name: "تلعصة", daira_name: "أبو الحسن", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 63, commune_name: "الزبوجة", daira_name: "الزبوجة", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 41, commune_name: "الحجاج", daira_name: "أولاد بن عبد القادر", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 52, commune_name: "أولاد بن عبد القادر", daira_name: "أولاد بن عبد القادر", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 30, commune_name: "عين مران", daira_name: "عين مران", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 37, commune_name: "بريرة", daira_name: "بني حواء", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 51, commune_name: "أولاد عباس", daira_name: "وادي الفضة", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 48, commune_name: "وادي الفضة", daira_name: "وادي الفضة", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 34, commune_name: "بني راشد", daira_name: "وادي الفضة", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 45, commune_name: "الهرانفة", daira_name: "عين مران", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 59, commune_name: "تاجنة", daira_name: "أبو الحسن", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 43, commune_name: "المرسى", daira_name: "المرسى", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 39, commune_name: "الشلف", daira_name: "الشلف", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 54, commune_name: "أم الدروع", daira_name: "الشلف", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 55, commune_name: "سنجاس", daira_name: "الشلف", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 56, commune_name: "سيدي عبد الرحمن", daira_name: "تنس", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 57, commune_name: "سيدي عكاشة", daira_name: "تنس", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 62, commune_name: "تنس", daira_name: "تنس", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 32, commune_name: "بني بوعتاب", daira_name: "الكريمية", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 42, commune_name: "الكريمية", daira_name: "الكريمية", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 44, commune_name: "حرشون", daira_name: "الكريمية", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 36, commune_name: "بوزغاية", daira_name: "الزبوجة", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 61, commune_name: "تاوقريت", daira_name: "تاوقريت", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 33, commune_name: "بني حواء", daira_name: "بني حواء", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 29, commune_name: "أبو الحسن", daira_name: "أبو الحسن", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 49, commune_name: "وادي قوسين", daira_name: "بني حواء", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 38, commune_name: "الشطية", daira_name: "أولاد فارس", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 47, commune_name: "مصدق", daira_name: "المرسى", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 53, commune_name: "أولاد فارس", daira_name: "أولاد فارس", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 35, commune_name: "بوقادير", daira_name: "بوقادير", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 50, commune_name: "وادي سلي", daira_name: "بوقادير", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 58, commune_name: "الصبحة", daira_name: "بوقادير", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 31, commune_name: "بنايرية", daira_name: "الزبوجة", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 46, commune_name: "الأبيض مجاجة", daira_name: "أولاد فارس", wilaya_code: "02", wilaya_name: "الشلف" },
  { id: 40, commune_name: "الظهرة", daira_name: "تاوقريت", wilaya_code: "02", wilaya_name: "الشلف" },


  // --- الأغواط ---
{ id: 67, commune_name: "البيضاء", daira_name: "قتلة سيدي سعيد", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 73, commune_name: "قلتة سيدي سعد", daira_name: "قتلة سيدي سعيد", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 69, commune_name: "بريدة", daira_name: "بريدة", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 66, commune_name: "عين سيدي علي", daira_name: "قتلة سيدي سعيد", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 85, commune_name: "تاجموت", daira_name: "عين ماضي", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 74, commune_name: "الحاج مشري", daira_name: "بريدة", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 87, commune_name: "تاويالة", daira_name: "بريدة", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 71, commune_name: "الغيشة", daira_name: "الغيشة", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 86, commune_name: "تاجرونة", daira_name: "عين ماضي", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 82, commune_name: "سبقاق", daira_name: "أفلو", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 83, commune_name: "سيدي بوزيد", daira_name: "أفلو", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 80, commune_name: "وادي مرة", daira_name: "وادي مرة", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 79, commune_name: "الأغواط", daira_name: "الأغواط", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 81, commune_name: "وادي مزي", daira_name: "وادي مرة", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 78, commune_name: "قصر الحيران", daira_name: "قصر الحيران", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 70, commune_name: "العسافية", daira_name: "سيدي مخلوف", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 84, commune_name: "سيدي مخلوف", daira_name: "سيدي مخلوف", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 75, commune_name: "حاسي الدلاعة", daira_name: "حاسي الرمل", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 76, commune_name: "حاسي الرمل", daira_name: "حاسي الرمل", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 65, commune_name: "عين ماضي", daira_name: "عين ماضي", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 72, commune_name: "الحويطة", daira_name: "عين ماضي", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 77, commune_name: "الخنق", daira_name: "عين ماضي", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 68, commune_name: "بن ناصر بن شهرة", daira_name: "قصر الحيران", wilaya_code: "03", wilaya_name: "الأغواط" },
{ id: 64, commune_name: "أفلو", daira_name: "أفلو", wilaya_code: "03", wilaya_name: "الأغواط" },

// --- أم البواقي ---
{
    id: 104,
    commune_name: "فكيرينة",
    daira_name: "فكيرينة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 102,
    commune_name: "الفجوج بوغرارة سعودي",
    daira_name: "عين فكرون",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 91,
    commune_name: "عين فكرون",
    daira_name: "عين فكرون",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 113,
    commune_name: "الرحية",
    daira_name: "مسكيانة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 107,
    commune_name: "مسكيانة",
    daira_name: "مسكيانة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 100,
    commune_name: "البلالة",
    daira_name: "مسكيانة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 95,
    commune_name: "بحير الشرقي",
    daira_name: "مسكيانة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 106,
    commune_name: "قصر الصباحي",
    daira_name: "قصر الصباحي",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 115,
    commune_name: "سوق نعمان",
    daira_name: "سوق نعمان",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 111,
    commune_name: "أولاد زواي",
    daira_name: "سوق نعمان",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 112,
    commune_name: "أم البواقي",
    daira_name: "أم البواقي",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 88,
    commune_name: "عين ببوش",
    daira_name: "عين ببوش",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 94,
    commune_name: "عين الزيتون",
    daira_name: "أم البواقي",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 97,
    commune_name: "بئر الشهداء",
    daira_name: "سوق نعمان",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 89,
    commune_name: "عين البيضاء",
    daira_name: "عين البيضاء",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 96,
    commune_name: "بريش",
    daira_name: "عين البيضاء",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 116,
    commune_name: "الزرق",
    daira_name: "عين البيضاء",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 93,
    commune_name: "عين مليلة",
    daira_name: "عين مليلة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 109,
    commune_name: "أولاد قاسم",
    daira_name: "عين مليلة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 110,
    commune_name: "أولاد حملة",
    daira_name: "عين مليلة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 99,
    commune_name: "العامرية",
    daira_name: "سيقوس",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 114,
    commune_name: "سيقوس",
    daira_name: "سيقوس",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 108,
    commune_name: "وادي نيني",
    daira_name: "فكيرينة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 90,
    commune_name: "عين الديس",
    daira_name: "عين ببوش",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 98,
    commune_name: "الضلعة",
    daira_name: "الضلعة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 101,
    commune_name: "الجازية",
    daira_name: "الضلعة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 92,
    commune_name: "عين كرشة",
    daira_name: "عين كرشة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 103,
    commune_name: "الحرملية",
    daira_name: "عين كرشة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},
{
    id: 105,
    commune_name: "هنشير تومغني",
    daira_name: "عين كرشة",
    wilaya_code: "04",
    wilaya_name: "أم البواقي"
},

  { id: 150, commune_name: "معافة", daira_name: "عين التوتة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 139, commune_name: "القصبات", daira_name: "رأس العيون", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 176, commune_name: "تيمقاد", daira_name: "تيمقاد", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 170, commune_name: "تاكسلانت", daira_name: "أولاد سي سليمان", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 161, commune_name: "أولاد سي سليمان", daira_name: "أولاد سي سليمان", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 148, commune_name: "لمسان", daira_name: "أولاد سي سليمان", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 169, commune_name: "تالخمت", daira_name: "رأس العيون", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 164, commune_name: "رأس العيون", daira_name: "رأس العيون", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 163, commune_name: "الرحبات", daira_name: "رأس العيون", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 160, commune_name: "أولاد سلام", daira_name: "رأس العيون", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 140, commune_name: "القيقبة", daira_name: "رأس العيون", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 172, commune_name: "ثنية العابد", daira_name: "ثنية العابد", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 123, commune_name: "باتنة", daira_name: "باتنة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 136, commune_name: "فسديس", daira_name: "باتنة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 154, commune_name: "وادي الشعبة", daira_name: "باتنة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 141, commune_name: "حيدوسة", daira_name: "مروانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 145, commune_name: "قصر بلزمة", daira_name: "مروانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 152, commune_name: "مروانة", daira_name: "مروانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 155, commune_name: "وادي الماء", daira_name: "مروانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 147, commune_name: "لازرو", daira_name: "سريانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 167, commune_name: "سريانة", daira_name: "سريانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 177, commune_name: "زانة البيضاء", daira_name: "سريانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 151, commune_name: "منعة", daira_name: "منعة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 174, commune_name: "تغرغار", daira_name: "منعة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 119, commune_name: "عين ياقوت", daira_name: "المعذر", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 128, commune_name: "بومية", daira_name: "المعذر", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 132, commune_name: "جرمة", daira_name: "المعذر", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 135, commune_name: "المعذر", daira_name: "المعذر", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 162, commune_name: "عيون العصافير", daira_name: "تازولت", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 171, commune_name: "تازولت", daira_name: "تازولت", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 127, commune_name: "بومقر", daira_name: "نقاوس", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 153, commune_name: "نقاوس", daira_name: "نقاوس", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 165, commune_name: "سفيان", daira_name: "نقاوس", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 120, commune_name: "أريس", daira_name: "أريس", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 173, commune_name: "تيغانمين", daira_name: "أريس", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 117, commune_name: "عين جاسر", daira_name: "عين جاسر", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 134, commune_name: "الحاسي", daira_name: "عين جاسر", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 166, commune_name: "سقانة", daira_name: "سقانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 175, commune_name: "تيلاطو", daira_name: "سقانة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 137, commune_name: "فم الطوب", daira_name: "إشمول", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 142, commune_name: "إشمول", daira_name: "إشمول", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 143, commune_name: "إينوغيسن", daira_name: "إشمول", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 129, commune_name: "بوزينة", daira_name: "بوزينة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 146, commune_name: "لارباع", daira_name: "بوزينة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 126, commune_name: "بولهيلات", daira_name: "الشمرة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 130, commune_name: "الشمرة", daira_name: "الشمرة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 122, commune_name: "بريكة", daira_name: "بريكة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 125, commune_name: "بيطام", daira_name: "بريكة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 149, commune_name: "إمدوكل", daira_name: "بريكة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 121, commune_name: "عزيل عبد القادر", daira_name: "الجزار", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 133, commune_name: "الجزار", daira_name: "الجزار", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 157, commune_name: "أولاد عمار", daira_name: "الجزار", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 138, commune_name: "غسيرة", daira_name: "تكوت", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 144, commune_name: "كيمل", daira_name: "تكوت", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 168, commune_name: "تكوت", daira_name: "تكوت", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 118, commune_name: "عين التوتة", daira_name: "عين التوتة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 124, commune_name: "بني فضالة الحقانية", daira_name: "عين التوتة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 159, commune_name: "أولاد فاضل", daira_name: "تيمقاد", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 158, commune_name: "أولاد عوف", daira_name: "عين التوتة", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 131, commune_name: "شير", daira_name: "ثنية العابد", wilaya_code: "05", wilaya_name: "باتنة" },
  { id: 156, commune_name: "وادي الطاقة", daira_name: "ثنية العابد", wilaya_code: "05", wilaya_name: "باتنة" }

   ,
   // 📌 Données des communes — ولاية بجاية (06)

   
  { id: 212, commune_name: "سيدي عياد", daira_name: "سيدي عيش", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 186, commune_name: "برباشة", daira_name: "برباشة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 199, commune_name: "الفلاي", daira_name: "سيدي عيش", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 206, commune_name: "كنديرة", daira_name: "برباشة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 213, commune_name: "سيدي عيش", daira_name: "سيدي عيش", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 225, commune_name: "تيفرة", daira_name: "سيدي عيش", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 227, commune_name: "تينبدار", daira_name: "سيدي عيش", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 200, commune_name: "القصر", daira_name: "القصر", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 201, commune_name: "فناية الماثن", daira_name: "القصر", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 229, commune_name: "توجة", daira_name: "القصر", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 198, commune_name: "ذراع القايد", daira_name: "خراطة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 207, commune_name: "خراطة", daira_name: "خراطة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 187, commune_name: "بجاية", daira_name: "بجاية", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 210, commune_name: "وادي غير", daira_name: "بجاية", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 191, commune_name: "بني معوش", daira_name: "بني معوش", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 188, commune_name: "بني جليل", daira_name: "أميزور", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 202, commune_name: "فرعون", daira_name: "أميزور", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 214, commune_name: "سمعون", daira_name: "أميزور", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 226, commune_name: "تيمزريت", daira_name: "تيمزريت", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 209, commune_name: "مالبو", daira_name: "سوق الإثنين", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 215, commune_name: "سوق لإثنين", daira_name: "سوق الإثنين", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 219, commune_name: "تامريجت", daira_name: "سوق الإثنين", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 194, commune_name: "بوخليفة", daira_name: "تيشي", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 217, commune_name: "تالة حمزة", daira_name: "تيشي", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 224, commune_name: "تيشي", daira_name: "تيشي", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 179, commune_name: "أيت رزين", daira_name: "إغيل علي", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 204, commune_name: "إغيل علي", daira_name: "إغيل علي", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 180, commune_name: "أيت إسماعيل", daira_name: "درقينة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 197, commune_name: "درقينة", daira_name: "درقينة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 221, commune_name: "تاسكريوت", daira_name: "درقينة", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 185, commune_name: "أوقاس", daira_name: "أوقاس", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 228, commune_name: "تيزي نبربر", daira_name: "أوقاس", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 178, commune_name: "أدكار", daira_name: "أدكار", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 189, commune_name: "بني كسيلة", daira_name: "أدكار", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 220, commune_name: "تاوريرت إغيل", daira_name: "أدكار", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 181, commune_name: "أقبو", daira_name: "أقبو", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 195, commune_name: "شلاطة", daira_name: "أقبو", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 205, commune_name: "اغرم", daira_name: "أقبو", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 218, commune_name: "تامقرة", daira_name: "أقبو", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 183, commune_name: "أمالو", daira_name: "صدوق", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 193, commune_name: "بوحمزة", daira_name: "صدوق", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 208, commune_name: "مسيسنة", daira_name: "صدوق", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 211, commune_name: "صدوق", daira_name: "صدوق", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 190, commune_name: "بني مليكش", daira_name: "تازملت", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 192, commune_name: "بو جليل", daira_name: "تازملت", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 222, commune_name: "تازمالت", daira_name: "تازملت", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 182, commune_name: "أكفادو", daira_name: "شميني", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 196, commune_name: "شميني", daira_name: "شميني", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 216, commune_name: "سوق اوفلا", daira_name: "شميني", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 223, commune_name: "طيبان", daira_name: "شميني", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 203, commune_name: "أوزلاقن", daira_name: "إفري أوزلاقن", wilaya_code: "06", wilaya_name: "بجاية" },
  { id: 184, commune_name: "أميزور", daira_name: "أميزور", wilaya_code: "06", wilaya_name: "بجاية" },
,

   // 📌 Données des communes de la wilaya 07 بسكرة

     { id: 241, commune_name: "الفيض", daira_name: "زريبة الوادي", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 249, commune_name: "ليشانة", daira_name: "طولقة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 235, commune_name: "بوشقرون", daira_name: "طولقة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 252, commune_name: "مخادمة", daira_name: "أورلال", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 239, commune_name: "جمورة", daira_name: "جمورة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 236, commune_name: "برانيس", daira_name: "جمورة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 246, commune_name: "الوطاية", daira_name: "الوطاية", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 245, commune_name: "القنطرة", daira_name: "القنطرة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 248, commune_name: "خنقة سيدي ناجي", daira_name: "زريبة الوادي", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 231, commune_name: "عين زعطوط", daira_name: "القنطرة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 262, commune_name: "زريبة الوادي", daira_name: "زريبة الوادي", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 253, commune_name: "المزيرعة", daira_name: "زريبة الوادي", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 233, commune_name: "بسكرة", daira_name: "بسكرة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 243, commune_name: "الحاجب", daira_name: "بسكرة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 254, commune_name: "مليلي", daira_name: "أورلال", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 247, commune_name: "فوغالة", daira_name: "فوغالة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 242, commune_name: "الغروس", daira_name: "فوغالة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 234, commune_name: "برج بن عزوز", daira_name: "طولقة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 257, commune_name: "أورلال", daira_name: "أورلال", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 256, commune_name: "أوماش", daira_name: "أورلال", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 230, commune_name: "عين الناقة", daira_name: "سيدي عقبة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 238, commune_name: "شتمة", daira_name: "سيدي عقبة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 244, commune_name: "الحوش", daira_name: "سيدي عقبة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 260, commune_name: "سيدي عقبة", daira_name: "سيدي عقبة", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 251, commune_name: "مشونش", daira_name: "مشونش", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 250, commune_name: "ليوة", daira_name: "أورلال", wilaya_code: "07", wilaya_name: "بسكرة" },
  { id: 261, commune_name: "طولقة", daira_name: "طولقة", wilaya_code: "07", wilaya_name: "بسكرة" }
,

  // 📌 Données des communes de la wilaya 08 بشار

    { id: 264, commune_name: "بشار", daira_name: "بشار", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 268, commune_name: "بوكايس", daira_name: "لحمر", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 275, commune_name: "لحمر", daira_name: "لحمر", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 278, commune_name: "موغل", daira_name: "لحمر", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 277, commune_name: "المريجة", daira_name: "القنادسة", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 281, commune_name: "تاغيت", daira_name: "تاغيت", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 263, commune_name: "العبادلة", daira_name: "العبادلة", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 270, commune_name: "عرق فراج", daira_name: "العبادلة", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 276, commune_name: "مشرع هواري بومدين", daira_name: "العبادلة", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 267, commune_name: "بني ونيف", daira_name: "بني ونيف", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 280, commune_name: "تبلبالة", daira_name: "تبلبالة", wilaya_code: "08", wilaya_name: "بشار" },
  { id: 272, commune_name: "القنادسة", daira_name: "القنادسة", wilaya_code: "08", wilaya_name: "بشار" }

  ,

  // 📌 Données des communes de la wilaya 09 البليدة

    { id: 285, commune_name: "بني مراد", daira_name: "أولاد يعيش", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 305, commune_name: "اولاد سلامة", daira_name: "بوقرة", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 302, commune_name: "موزاية", daira_name: "موزاية", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 299, commune_name: "حمام ملوان", daira_name: "بوقرة", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 291, commune_name: "بوقرة", daira_name: "بوقرة", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 307, commune_name: "صوحان", daira_name: "الأربعاء", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 300, commune_name: "الأربعاء", daira_name: "الأربعاء", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 308, commune_name: "الصومعة", daira_name: "بوفاريك", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 298, commune_name: "قرواو", daira_name: "بوفاريك", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 290, commune_name: "بوفاريك", daira_name: "بوفاريك", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 301, commune_name: "مفتاح", daira_name: "مفتاح", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 294, commune_name: "الشفة", daira_name: "موزاية", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 284, commune_name: "عين الرمانة", daira_name: "موزاية", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 303, commune_name: "وادي جر", daira_name: "العفرون", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 297, commune_name: "العفرون", daira_name: "العفرون", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 306, commune_name: "أولاد يعيش", daira_name: "أولاد يعيش", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 295, commune_name: "الشريعة", daira_name: "أولاد يعيش", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 296, commune_name: "جبابرة", daira_name: "مفتاح", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 304, commune_name: "وادي العلايق", daira_name: "وادي العلايق", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 287, commune_name: "بن خليل", daira_name: "وادي العلايق", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 286, commune_name: "بني تامو", daira_name: "وادي العلايق", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 293, commune_name: "الشبلي", daira_name: "بوعينان", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 292, commune_name: "بوعينان", daira_name: "بوعينان", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 289, commune_name: "بوعرفة", daira_name: "البليدة", wilaya_code: "09", wilaya_name: "البليدة" },
  { id: 288, commune_name: "البليدة", daira_name: "البليدة", wilaya_code: "09", wilaya_name: "البليدة" },

  ,
 
  // 📌 Données des communes de la wilaya 10 البويرة


    { id: 312, commune_name: "عين العلوي", daira_name: "عين بسام", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 334, commune_name: "الحجرة الزرقاء", daira_name: "برج أوخريص", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 342, commune_name: "مزدور", daira_name: "برج أوخريص", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 351, commune_name: "تاقديت", daira_name: "برج أوخريص", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 346, commune_name: "ريدان", daira_name: "سور الغزلان", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 341, commune_name: "المعمورة", daira_name: "سور الغزلان", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 331, commune_name: "الحاكمية", daira_name: "سور الغزلان", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 310, commune_name: "أهل القصر", daira_name: "بشلول", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 325, commune_name: "ديرة", daira_name: "سور الغزلان", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 324, commune_name: "الدشمية", daira_name: "سور الغزلان", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 317, commune_name: "بشلول", daira_name: "بشلول", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 352, commune_name: "آث  منصور", daira_name: "مشد الله", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 347, commune_name: "سحاريج", daira_name: "مشد الله", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 327, commune_name: "العجيبة", daira_name: "بشلول", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 328, commune_name: "الأسنام", daira_name: "بشلول", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 339, commune_name: "أمشدالة", daira_name: "مشد الله", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 319, commune_name: "برج أوخريص", daira_name: "برج أوخريص", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 349, commune_name: "سور الغزلان", daira_name: "سور الغزلان", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 336, commune_name: "حنيف", daira_name: "مشد الله", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 323, commune_name: "شرفة", daira_name: "مشد الله", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 344, commune_name: "أولاد راشد", daira_name: "بشلول", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 311, commune_name: "عين الحجر", daira_name: "عين بسام", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 309, commune_name: "أغبالو", daira_name: "مشد الله", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 345, commune_name: "روراوة", daira_name: "بئر غبالو", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 330, commune_name: "الخبوزية", daira_name: "بئر غبالو", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 318, commune_name: "بئر غبالو", daira_name: "بئر غبالو", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 321, commune_name: "البويرة", daira_name: "البويرة", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 313, commune_name: "عين الترك", daira_name: "البويرة", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 315, commune_name: "أيت لعزيز", daira_name: "البويرة", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 314, commune_name: "عين بسام", daira_name: "عين بسام", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 332, commune_name: "المقراني", daira_name: "سوق الخميس", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 348, commune_name: "سوق الخميس", daira_name: "سوق الخميس", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 316, commune_name: "أعمر", daira_name: "القادرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 326, commune_name: "جباحية", daira_name: "القادرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 329, commune_name: "الهاشمية", daira_name: "الهاشمية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 335, commune_name: "حيزر", daira_name: "الحيزر", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 350, commune_name: "تاغزوت", daira_name: "الحيزر", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 320, commune_name: "بودربالة", daira_name: "الأخضرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 322, commune_name: "بوكرم", daira_name: "الأخضرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 333, commune_name: "قرومة", daira_name: "الأخضرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 338, commune_name: "الأخضرية", daira_name: "الأخضرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 340, commune_name: "معلة", daira_name: "الأخضرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 337, commune_name: "قادرية", daira_name: "القادرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 353, commune_name: "زبربر", daira_name: "الأخضرية", wilaya_code: "10", wilaya_name: "البويرة" },
  { id: 343, commune_name: "وادي البردي", daira_name: "الهاشمية", wilaya_code: "10", wilaya_name: "البويرة" }
,

  // 📌 Données des communes de la wilaya 11 تمنراست

  { id: 362, commune_name: "تاظروك", daira_name: "تاظروك", wilaya_code: "11", wilaya_name: "تمنراست" },
  { id: 354, commune_name: "ابلسة", daira_name: "سيلت", wilaya_code: "11", wilaya_name: "تمنراست" },
  { id: 361, commune_name: "تمنراست", daira_name: "تمنراست", wilaya_code: "11", wilaya_name: "تمنراست" },
  { id: 355, commune_name: "عين امقل", daira_name: "تمنراست", wilaya_code: "11", wilaya_name: "تمنراست" },
  { id: 359, commune_name: "أدلس", daira_name: "تاظروك", wilaya_code: "11", wilaya_name: "تمنراست" }

  ,

  // 📌 Données des communes de la wilaya 12 تبسة

  { id: 380, commune_name: "الحويجبات", daira_name: "الماء الابيض", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 379, commune_name: "العوينات", daira_name: "العوينات", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 381, commune_name: "فركان", daira_name: "نقرين", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 385, commune_name: "نقرين", daira_name: "نقرين", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 368, commune_name: "بئر مقدم", daira_name: "بئر مقدم", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 367, commune_name: "بئر الذهب", daira_name: "مرسط", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 388, commune_name: "صفصاف الوسرى", daira_name: "أم علي", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 382, commune_name: "قريقر", daira_name: "بئر مقدم", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 366, commune_name: "بكارية", daira_name: "الكويف", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 371, commune_name: "بولحاف الدير", daira_name: "الكويف", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 387, commune_name: "أم علي", daira_name: "أم علي", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 370, commune_name: "بوخضرة", daira_name: "العوينات", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 374, commune_name: "الماء الابيض", daira_name: "الماء الابيض", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 386, commune_name: "الونزة", daira_name: "الونزة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 375, commune_name: "المريج", daira_name: "الونزة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 364, commune_name: "عين الزرقاء", daira_name: "الونزة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 389, commune_name: "سطح قنطيس", daira_name: "العقلة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 377, commune_name: "العقلة", daira_name: "العقلة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 376, commune_name: "المزرعة", daira_name: "العقلة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 365, commune_name: "بجن", daira_name: "العقلة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 384, commune_name: "مرسط", daira_name: "مرسط", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 391, commune_name: "ثليجان", daira_name: "الشريعة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 372, commune_name: "الشريعة", daira_name: "الشريعة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 378, commune_name: "العقلة المالحة", daira_name: "بئر العاتر", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 369, commune_name: "بئر العاتر", daira_name: "بئر العاتر", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 390, commune_name: "تبسة", daira_name: "تبسة", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 383, commune_name: "الحمامات", daira_name: "بئر مقدم", wilaya_code: "12", wilaya_name: "تبسة" },
  { id: 373, commune_name: "الكويف", daira_name: "الكويف", wilaya_code: "12", wilaya_name: "تبسة" },

  // 📌 Données des communes pour تلمسان (13)


  { id: 400, commune_name: "باب العسة", daira_name: "باب العسة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 441, commune_name: "تيرني بني هديل", daira_name: "منصورة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 424, commune_name: "منصورة", daira_name: "منصورة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 404, commune_name: "بني مستر", daira_name: "منصورة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 394, commune_name: "عين غرابة", daira_name: "منصورة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 411, commune_name: "شتوان", daira_name: "شتوان", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 399, commune_name: "عمير", daira_name: "شتوان", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 393, commune_name: "عين فزة", daira_name: "شتوان", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 422, commune_name: "هنين", daira_name: "هنين", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 403, commune_name: "بني خلاد", daira_name: "هنين", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 436, commune_name: "سيدي الجيلالي", daira_name: "سيدي الجيلالي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 410, commune_name: "البويهي", daira_name: "سيدي الجيلالي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 427, commune_name: "ندرومة", daira_name: "ندرومة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 426, commune_name: "مسيردة الفواقة", daira_name: "مرسى بن مهيدي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 425, commune_name: "مرسى بن مهيدي", daira_name: "مرسى بن مهيدي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 437, commune_name: "سيدي مجاهد", daira_name: "بني بوسعيد", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 402, commune_name: "بني بوسعيد", daira_name: "بني بوسعيد", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 434, commune_name: "سبدو", daira_name: "سبدو", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 417, commune_name: "القور", daira_name: "سبدو", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 414, commune_name: "العريشة", daira_name: "سبدو", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 409, commune_name: "بوحلو", daira_name: "صبرة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 423, commune_name: "مغنية", daira_name: "مغنية", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 420, commune_name: "حمام بوغرارة", daira_name: "مغنية", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 444, commune_name: "زناتة", daira_name: "الحناية", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 430, commune_name: "أولاد رياح", daira_name: "الحناية", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 421, commune_name: "الحناية", daira_name: "الحناية", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 435, commune_name: "سيدي العبدلي", daira_name: "بن سكران", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 440, commune_name: "سوق الثلاثاء", daira_name: "باب العسة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 408, commune_name: "بن سكران", daira_name: "بن سكران", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 418, commune_name: "فلاوسن", daira_name: "فلاوسن", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 395, commune_name: "عين الكبيرة", daira_name: "فلاوسن", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 392, commune_name: "عين فتاح", daira_name: "فلاوسن", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 443, commune_name: "تلمسان", daira_name: "تلمسان", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 396, commune_name: "عين النحالة", daira_name: "عين تالوت", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 397, commune_name: "عين تالوت", daira_name: "عين تالوت", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 398, commune_name: "عين يوسف", daira_name: "الرمشي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 405, commune_name: "بني وارسوس", daira_name: "الرمشي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 416, commune_name: "الفحول", daira_name: "الرمشي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 431, commune_name: "الرمشي", daira_name: "الرمشي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 433, commune_name: "سبعة شيوخ", daira_name: "الرمشي", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 439, commune_name: "السواني", daira_name: "باب العسة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 432, commune_name: "صبرة", daira_name: "صبرة", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 412, commune_name: "دار يغمراسن", daira_name: "الغزوات", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 419, commune_name: "الغزوات", daira_name: "الغزوات", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 438, commune_name: "السواحلية", daira_name: "الغزوات", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 442, commune_name: "تيانت", daira_name: "الغزوات", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 406, commune_name: "بني صميل", daira_name: "أولاد ميمون", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 428, commune_name: "وادي الخضر", daira_name: "أولاد ميمون", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 429, commune_name: "أولاد ميمون", daira_name: "أولاد ميمون", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 401, commune_name: "بني بهدل", daira_name: "بني سنوس", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 407, commune_name: "بني سنوس", daira_name: "بني سنوس", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 415, commune_name: "العزايل", daira_name: "بني سنوس", wilaya_code: "13", wilaya_name: "تلمسان" },
  { id: 413, commune_name: "جبالة", daira_name: "ندرومة", wilaya_code: "13", wilaya_name: "تلمسان" },

  // 📌 Données des communes pour ولاية تيارت (14)

 { id: 461, commune_name: "مهدية", daira_name: "مهدية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 447, commune_name: "عين دزاريت", daira_name: "مهدية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 472, commune_name: "السبعين", daira_name: "مهدية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 455, commune_name: "الفايجة", daira_name: "السوقر", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 475, commune_name: "سي عبد الغني", daira_name: "السوقر", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 480, commune_name: "السوقر", daira_name: "السوقر", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 485, commune_name: "توسنينة", daira_name: "السوقر", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 465, commune_name: "مغيلة", daira_name: "مغيلة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 473, commune_name: "السبت", daira_name: "مغيلة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 479, commune_name: "سيدي حسني", daira_name: "مغيلة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 448, commune_name: "عين الحديد", daira_name: "فرندة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 456, commune_name: "فرندة", daira_name: "فرندة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 482, commune_name: "تخمرت", daira_name: "فرندة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 449, commune_name: "عين كرمس", daira_name: "عين كرمس", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 453, commune_name: "جبيلات الرصفاء", daira_name: "عين كرمس", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 460, commune_name: "مادنة", daira_name: "عين كرمس", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 463, commune_name: "مدريسة", daira_name: "عين كرمس", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 476, commune_name: "سيدي عبد الرحمن", daira_name: "عين كرمس", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 459, commune_name: "قصر الشلالة", daira_name: "قصر الشلالة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 457, commune_name: "قرطوفة", daira_name: "رحوية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 474, commune_name: "سرغين", daira_name: "قصر الشلالة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 486, commune_name: "زمالة  الأمير عبد القادر", daira_name: "قصر الشلالة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 469, commune_name: "وادي ليلي", daira_name: "وادي ليلي", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 477, commune_name: "سيدي علي ملال", daira_name: "وادي ليلي", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 454, commune_name: "جيلالي بن عمار", daira_name: "مشرع الصفا", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 462, commune_name: "مشرع الصفا", daira_name: "مشرع الصفا", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 481, commune_name: "تاقدمت", daira_name: "مشرع الصفا", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 450, commune_name: "بوقرة", daira_name: "حمادية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 458, commune_name: "حمادية", daira_name: "حمادية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 471, commune_name: "الرشايقة", daira_name: "حمادية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 484, commune_name: "تيدة", daira_name: "وادي ليلي", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 467, commune_name: "الناظورة", daira_name: "مهدية", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 483, commune_name: "تيارت", daira_name: "تيارت", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 464, commune_name: "مدروسة", daira_name: "مدروسة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 466, commune_name: "ملاكو", daira_name: "مدروسة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 478, commune_name: "سيدي بختي", daira_name: "مدروسة", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 446, commune_name: "عين الذهب", daira_name: "عين الذهب", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 451, commune_name: "شحيمة", daira_name: "عين الذهب", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 468, commune_name: "النعيمة", daira_name: "عين الذهب", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 445, commune_name: "عين بوشقيف", daira_name: "دحموني", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 452, commune_name: "دحموني", daira_name: "دحموني", wilaya_code: "14", wilaya_name: "تيارت" },
  { id: 470, commune_name: "الرحوية", daira_name: "رحوية", wilaya_code: "14", wilaya_name: "تيارت" }

  ,

  // 📌 Communes de ولاية تيزي وزو (15)

      { id: 535, commune_name: "ميزرانـــة", daira_name: "تيقزيرت", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 522, commune_name: "إيجــار", daira_name: "بوزقن", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 510, commune_name: "بني دوالة", daira_name: "بني دوالة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 512, commune_name: "بني زيكــي", daira_name: "بوزقن", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 527, commune_name: "إيلولة أومـــالو", daira_name: "بوزقن", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 489, commune_name: "أقني قغران", daira_name: "واضية", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 493, commune_name: "أيت بــوادو", daira_name: "واضية", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 538, commune_name: "واضية", daira_name: "واضية", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 547, commune_name: "تيزي نثلاثة", daira_name: "واضية", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 488, commune_name: "أغريب", daira_name: "أزفون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 498, commune_name: "أيت شافع", daira_name: "أزفون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 504, commune_name: "أقرو", daira_name: "أزفون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 507, commune_name: "أزفون", daira_name: "أزفون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 525, commune_name: "إفليـــسن", daira_name: "تيقزيرت", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 544, commune_name: "تيقـزيرت", daira_name: "تيقزيرت", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 505, commune_name: "أسي يوسف", daira_name: "بوغني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 513, commune_name: "بوغني", daira_name: "بوغني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 515, commune_name: "بونوح", daira_name: "بوغني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 533, commune_name: "مشطراس", daira_name: "بوغني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 517, commune_name: "ذراع بن خدة", daira_name: "ذراع بن خدة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 540, commune_name: "سيدي نعمان", daira_name: "ذراع بن خدة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 543, commune_name: "تادمايت", daira_name: "ذراع بن خدة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 546, commune_name: "تيرمتين", daira_name: "ذراع بن خدة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 494, commune_name: "أيت بومهدي", daira_name: "واسيف", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 501, commune_name: "أيت تودرت", daira_name: "واسيف", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 509, commune_name: "بني عيسي", daira_name: "بني دوالة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 537, commune_name: "واسيف", daira_name: "واسيف", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 495, commune_name: "أيت خليلي", daira_name: "مقلع", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 534, commune_name: "مقــلع", daira_name: "مقلع", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 541, commune_name: "صوامـــع", daira_name: "مقلع", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 511, commune_name: "بني يني", daira_name: "بني يني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 521, commune_name: "إبودرارن", daira_name: "بني يني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 552, commune_name: "يطــافن", daira_name: "بني يني", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 549, commune_name: "تيزي وزو", daira_name: "تيزي وزو", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 487, commune_name: "أبي يوسف", daira_name: "عين الحمام", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 490, commune_name: "عين الحمام", daira_name: "عين الحمام", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 502, commune_name: "أيت يحيى", daira_name: "عين الحمام", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 503, commune_name: "اقبيل", daira_name: "عين الحمام", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 514, commune_name: "بوجيمة", daira_name: "ماكودة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 532, commune_name: "ماكودة", daira_name: "ماكودة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 491, commune_name: "عين الزاوية", daira_name: "ذراع الميزان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 496, commune_name: "أيت يحي موسى", daira_name: "ذراع الميزان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 518, commune_name: "ذراع الميزان", daira_name: "ذراع الميزان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 520, commune_name: "فريقات", daira_name: "ذراع الميزان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 536, commune_name: "مكيرة", daira_name: "تيزي غنيف", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 548, commune_name: "تيزي غنيف", daira_name: "تيزي غنيف", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 526, commune_name: "إيلـيــلتـن", daira_name: "إفرحونان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 528, commune_name: "إمســوحال", daira_name: "إفرحونان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 523, commune_name: "إفــرحــونان", daira_name: "إفرحونان", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 506, commune_name: "عزازقة", daira_name: "عزازقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 519, commune_name: "فريحة", daira_name: "عزازقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 524, commune_name: "إيفيغاء", daira_name: "عزازقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 551, commune_name: "إعــكورن", daira_name: "عزازقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 553, commune_name: "زكري", daira_name: "عزازقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 492, commune_name: "أيت عقـواشة", daira_name: "الأربعاء ناث إيراثن", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 529, commune_name: "إيرجـــن", daira_name: "الأربعاء ناث إيراثن", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 530, commune_name: "الأربعــاء ناث إيراثن", daira_name: "الأربعاء ناث إيراثن", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 500, commune_name: "أيت  أومالو", daira_name: "تيزي راشد", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 550, commune_name: "تيزي راشد", daira_name: "تيزي راشد", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 497, commune_name: "أيت عيسى ميمون", daira_name: "واقنون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 539, commune_name: "واقنون", daira_name: "واقنون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 545, commune_name: "تيمـيزار", daira_name: "واقنون", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 531, commune_name: "معـــاتقة", daira_name: "معاتقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 542, commune_name: "سوق الإثنين", daira_name: "معاتقة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 499, commune_name: "أيت محمود", daira_name: "بني دوالة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 508, commune_name: "بنــــي زمنزار", daira_name: "بني دوالة", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 523, commune_name: "إفــرحــونان ", daira_name: "إفــرحــونان ", wilaya_code: "15", wilaya_name: "تيزي وزو" },
    { id: 516, commune_name: "بوزقــن", daira_name: "بوزقن", wilaya_code: "15", wilaya_name: "تيزي وزو" }

,

     { id: 588, commune_name: "حسين داي", daira_name: "حسين داي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 592, commune_name: "الكاليتوس", daira_name: "براقي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 606, commune_name: "سيدي موسى", daira_name: "براقي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 591, commune_name: "القبة", daira_name: "حسين داي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 594, commune_name: "محمد بلوزداد", daira_name: "حسين داي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 555, commune_name: "عين طاية", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 558, commune_name: "باب الزوار", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 569, commune_name: "برج الكيفان", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 574, commune_name: "الدار البيضاء", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 584, commune_name: "المرسى", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 595, commune_name: "المحمدية", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 566, commune_name: "بئر توتة", daira_name: "بئر توتة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 598, commune_name: "اولاد شبل", daira_name: "بئر توتة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 609, commune_name: "تسالة المرجة", daira_name: "بئر توتة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 587, commune_name: "هراوة", daira_name: "الرويبة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 602, commune_name: "رغاية", daira_name: "الرويبة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 603, commune_name: "الرويبة", daira_name: "الرويبة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 593, commune_name: "المعالمة", daira_name: "زرالدة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 600, commune_name: "الرحمانية", daira_name: "زرالدة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 607, commune_name: "سويدانية", daira_name: "زرالدة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 608, commune_name: "سطاوالي", daira_name: "زرالدة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 610, commune_name: "زرالدة", daira_name: "زرالدة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 559, commune_name: "بابا حسن", daira_name: "الدرارية", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 577, commune_name: "الدويرة", daira_name: "الدرارية", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 578, commune_name: "الدرارية", daira_name: "الدرارية", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 579, commune_name: "العاشور", daira_name: "الدرارية", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 590, commune_name: "الخرايسية", daira_name: "الدرارية", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 554, commune_name: "عين بنيان", daira_name: "الشراقة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 573, commune_name: "الشراقة", daira_name: "الشراقة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 575, commune_name: "دالي ابراهيم", daira_name: "الشراقة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 586, commune_name: "الحمامات", daira_name: "الشراقة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 599, commune_name: "اولاد فايت", daira_name: "الشراقة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 556, commune_name: "الجزائر الوسطى", daira_name: "سيدي امحمد", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 582, commune_name: "المدنية", daira_name: "سيدي امحمد", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 585, commune_name: "المرادية", daira_name: "سيدي امحمد", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 605, commune_name: "سيدي امحمد", daira_name: "سيدي امحمد", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 604, commune_name: "السحاولة", daira_name: "بئر مراد رايس", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 567, commune_name: "بولوغين بن زيري", daira_name: "باب الوادي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 572, commune_name: "القصبة", daira_name: "باب الوادي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 596, commune_name: "وادي قريش", daira_name: "باب الوادي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 601, commune_name: "الرايس حميدو", daira_name: "باب الوادي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 564, commune_name: "بئر مراد رايس", daira_name: "بئر مراد رايس", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 565, commune_name: "بئر خادم", daira_name: "بئر مراد رايس", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 576, commune_name: "جسر قسنطينة", daira_name: "بئر مراد رايس", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 589, commune_name: "حيدرة", daira_name: "بئر مراد رايس", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 583, commune_name: "المغارية", daira_name: "حسين داي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 562, commune_name: "ابن عكنون", daira_name: "بوزريعة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 563, commune_name: "بني مسوس", daira_name: "بوزريعة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 571, commune_name: "بوزريعة", daira_name: "بوزريعة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 580, commune_name: "الابيار", daira_name: "بوزريعة", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 560, commune_name: "باش جراح", daira_name: "الحراش", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 570, commune_name: "بوروبة", daira_name: "الحراش", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 581, commune_name: "الحراش", daira_name: "الحراش", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 597, commune_name: "وادي السمار", daira_name: "الحراش", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 561, commune_name: "براقي", daira_name: "براقي", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 568, commune_name: "برج البحري", daira_name: "الدار البيضاء", wilaya_code: "16", wilaya_name: "الجزائر" },
{ id: 557, commune_name: "باب الوادي", daira_name: "باب الوادي", wilaya_code: "16", wilaya_name: "الجزائر" },

   { id: 634, commune_name: "حاسي العش", daira_name: "حاسي بحبح", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 612, commune_name: "عين الإبل", daira_name: "عين الإبل", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 626, commune_name: "القديد", daira_name: "الشارف", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 621, commune_name: "الشارف", daira_name: "الشارف", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 618, commune_name: "بن يعقوب", daira_name: "الشارف", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 642, commune_name: "سيدي بايزيد", daira_name: "دار الشيوخ", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 637, commune_name: "مليليحة", daira_name: "دار الشيوخ", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 622, commune_name: "دار الشيوخ", daira_name: "دار الشيوخ", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 644, commune_name: "تعظميت", daira_name: "عين الإبل", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 632, commune_name: "حد الصحاري", daira_name: "حد الصحاري", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 620, commune_name: "بويرة الأحداب", daira_name: "حد الصحاري", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 613, commune_name: "عين فقه", daira_name: "حد الصحاري", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 643, commune_name: "سيدي لعجال", daira_name: "سيدي لعجال", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 635, commune_name: "حاسي فدول", daira_name: "سيدي لعجال", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 628, commune_name: "الخميس", daira_name: "سيدي لعجال", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 641, commune_name: "سلمانة", daira_name: "مسعد", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 640, commune_name: "سد الرحال", daira_name: "مسعد", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 636, commune_name: "مسعد", daira_name: "مسعد", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 631, commune_name: "قطارة", daira_name: "مسعد", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 623, commune_name: "دلدول", daira_name: "مسعد", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 646, commune_name: "زكار", daira_name: "عين الإبل", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 625, commune_name: "دويس", daira_name: "الادريسية", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 627, commune_name: "الادريسية", daira_name: "الادريسية", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 611, commune_name: "عين الشهداء", daira_name: "الادريسية", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 624, commune_name: "الجلفة", daira_name: "الجلفة", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 619, commune_name: "بيرين", daira_name: "بيرين", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 639, commune_name: "أم العظام", daira_name: "فيض البطمة", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 629, commune_name: "فيض البطمة", daira_name: "فيض البطمة", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 616, commune_name: "عمورة", daira_name: "فيض البطمة", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 645, commune_name: "زعفران", daira_name: "حاسي بحبح", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 630, commune_name: "قرنيني", daira_name: "عين وسارة", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 615, commune_name: "عين وسارة", daira_name: "عين وسارة", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 617, commune_name: "بنهار", daira_name: "بيرين", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 614, commune_name: "عين معبد", daira_name: "حاسي بحبح", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 633, commune_name: "حاسي بحبح", daira_name: "حاسي بحبح", wilaya_code: "17", wilaya_name: "الجلفة" },
{ id: 638, commune_name: "مجبارة", daira_name: "عين الإبل", wilaya_code: "17", wilaya_name: "الجلفة" },


    { id: 662, commune_name: "جيجل", daira_name: "جيجل", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 656, commune_name: "العوانة", daira_name: "العوانة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 668, commune_name: "سلمى بن زيادة", daira_name: "العوانة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 660, commune_name: "أراقن سويسي", daira_name: "زيامة منصورية", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 650, commune_name: "بوسيف أولاد عسكر", daira_name: "الطاهير", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 674, commune_name: "زيامة منصورية", daira_name: "زيامة منصورية", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 651, commune_name: "الشحنة", daira_name: "الطاهير", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 659, commune_name: "الامير عبد القادر", daira_name: "الطاهير", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 665, commune_name: "وجانة", daira_name: "الطاهير", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 672, commune_name: "الطاهير", daira_name: "الطاهير", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 652, commune_name: "الشقفة", daira_name: "الشقفة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 657, commune_name: "القنار نشفي", daira_name: "الشقفة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 670, commune_name: "سيدي عبد العزيز", daira_name: "الشقفة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 658, commune_name: "الميلية", daira_name: "الميلية", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 667, commune_name: "أولاد يحيى خدروش", daira_name: "الميلية", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 666, commune_name: "أولاد رابح", daira_name: "سيدي معروف", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 671, commune_name: "سيدي معروف", daira_name: "سيدي معروف", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 661, commune_name: "غبالة", daira_name: "السطارة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 669, commune_name: "السطارة", daira_name: "السطارة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 649, commune_name: "بوراوي بلهادف", daira_name: "العنصر", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 655, commune_name: "العنصر", daira_name: "العنصر", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 664, commune_name: "خيري واد عجول", daira_name: "العنصر", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 654, commune_name: "جيملة", daira_name: "جيملة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 663, commune_name: "قاوس", daira_name: "تاكسنة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 673, commune_name: "تاكسنة", daira_name: "تاكسنة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 647, commune_name: "برج الطهر", daira_name: "الشقفة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 648, commune_name: "بودريعة بني  ياجيس", daira_name: "جيملة", wilaya_code: "18", wilaya_name: "جيجل" },
{ id: 653, commune_name: "الجمعة بني حبيبي", daira_name: "العنصر", wilaya_code: "18", wilaya_name: "جيجل" },


      // 📌 Communes de ولاية  سطيف (19)

      { id: 726, commune_name: "الرصفة", daira_name: "صالح باي", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 721, commune_name: "واد البارد", daira_name: "عموشة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 734, commune_name: "تيزي نبشار", daira_name: "عموشة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 720, commune_name: "مزلوق", daira_name: "عين أرنات", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 709, commune_name: "قلال", daira_name: "عين ولمان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 717, commune_name: "قصر الابطال", daira_name: "عين ولمان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 724, commune_name: "أولاد سي أحمد", daira_name: "عين ولمان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 684, commune_name: "أيت نوال مزادة", daira_name: "بوعنداس", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 685, commune_name: "ايت تيزي", daira_name: "بوعنداس", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 699, commune_name: "بوعنداس", daira_name: "بوعنداس", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 701, commune_name: "بوسلام", daira_name: "بوعنداس", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 713, commune_name: "حمام السخنة", daira_name: "حمام السخنة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 732, commune_name: "الطاية", daira_name: "حمام السخنة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 733, commune_name: "التلة", daira_name: "حمام السخنة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 680, commune_name: "عين ولمان", daira_name: "عين ولمان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 702, commune_name: "بوطالب", daira_name: "صالح باي", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 714, commune_name: "الحامة", daira_name: "صالح باي", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 725, commune_name: "أولاد تبان", daira_name: "صالح باي", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 686, commune_name: "عموشة", daira_name: "عموشة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 727, commune_name: "صالح باي", daira_name: "صالح باي", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 677, commune_name: "عين أزال", daira_name: "عين أزال", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 679, commune_name: "عين الحجر", daira_name: "عين أزال", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 689, commune_name: "بيضاء برج", daira_name: "عين أزال", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 697, commune_name: "بئر حدادة", daira_name: "عين أزال", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 711, commune_name: "قنزات", daira_name: "قنزات", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 716, commune_name: "حربيل", daira_name: "قنزات", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 682, commune_name: "عين الروى", daira_name: "بوقاعة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 694, commune_name: "بني وسين", daira_name: "بوقاعة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 707, commune_name: "أوريسيا", daira_name: "عين أرنات", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 700, commune_name: "بوقاعة", daira_name: "بوقاعة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 705, commune_name: "ذراع قبيلة", daira_name: "حمام قرقور", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 715, commune_name: "حمام قرقور", daira_name: "حمام قرقور", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 729, commune_name: "سطيف", daira_name: "سطيف", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 678, commune_name: "عين الكبيرة", daira_name: "عين الكبيرة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 703, commune_name: "الدهامشة", daira_name: "عين الكبيرة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 722, commune_name: "أولاد عدوان", daira_name: "عين الكبيرة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 683, commune_name: "عين السبت", daira_name: "بني عزيز", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 695, commune_name: "بني عزيز", daira_name: "بني عزيز", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 718, commune_name: "معاوية", daira_name: "بني عزيز", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 690, commune_name: "بلاعة", daira_name: "بئر العرش", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 698, commune_name: "بئر العرش", daira_name: "بئر العرش", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 708, commune_name: "الولجة", daira_name: "بئر العرش", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 730, commune_name: "تاشودة", daira_name: "بئر العرش", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 731, commune_name: "تالة إيفاسن", daira_name: "ماوكلان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 728, commune_name: "سرج الغول", daira_name: "بابور", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 712, commune_name: "قجال", daira_name: "قجال", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 723, commune_name: "أولاد صابر", daira_name: "قجال", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 688, commune_name: "بازر سكرة", daira_name: "العلمة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 706, commune_name: "العلمة", daira_name: "العلمة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 710, commune_name: "قلتة زرقاء", daira_name: "العلمة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 692, commune_name: "بني فودة", daira_name: "جميلة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 704, commune_name: "جميلة", daira_name: "جميلة", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 681, commune_name: "عين لقراج", daira_name: "بني ورتيلان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 691, commune_name: "بني شبانة", daira_name: "بني ورتيلان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 693, commune_name: "بني ورتيلان", daira_name: "بني ورتيلان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 696, commune_name: "بني موحلي", daira_name: "بني ورتيلان", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 675, commune_name: "عين عباسة", daira_name: "عين أرنات", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 676, commune_name: "عين أرنات", daira_name: "عين أرنات", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 687, commune_name: "بابور", daira_name: "بابور", wilaya_code: "19", wilaya_name: "سطيف" },
{ id: 719, commune_name: "ماوكلان", daira_name: "ماوكلان", wilaya_code: "19", wilaya_name: "سطيف" }

,

{ id: 745, commune_name: "سعيدة", daira_name: "سعيدة", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 749, commune_name: "تيرسين", daira_name: "أولاد ابراهيم", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 743, commune_name: "أولاد إبراهيم", daira_name: "أولاد ابراهيم", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 737, commune_name: "عين السلطان", daira_name: "أولاد ابراهيم", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 741, commune_name: "المعمورة", daira_name: "الحساسنة", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 739, commune_name: "الحساسنة", daira_name: "الحساسنة", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 736, commune_name: "عين السخونة", daira_name: "الحساسنة", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 748, commune_name: "سيدي بوبكر", daira_name: "سيدي بوبكر", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 744, commune_name: "أولاد خالد", daira_name: "سيدي بوبكر", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 740, commune_name: "هونت", daira_name: "سيدي بوبكر", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 750, commune_name: "يوب", daira_name: "يوب", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 738, commune_name: "دوي ثابت", daira_name: "يوب", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 746, commune_name: "سيدي احمد", daira_name: "عين الحجر", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 742, commune_name: "مولاي العربي", daira_name: "عين الحجر", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 735, commune_name: "عين الحجر", daira_name: "عين الحجر", wilaya_code: "20", wilaya_name: "سعيدة" },
{ id: 747, commune_name: "سيدي عمر", daira_name: "سيدي بوبكر", wilaya_code: "20", wilaya_name: "سعيدة" },

,

{ id: 751, commune_name: "عين بوزيان", daira_name: "سيدي مزغيش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 783, commune_name: "صالح بو الشعور", daira_name: "الحروش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 768, commune_name: "الحدائق", daira_name: "الحدائق", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 787, commune_name: "زردازة", daira_name: "الحروش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 780, commune_name: "أولاد حبابة", daira_name: "الحروش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 759, commune_name: "بني ولبان", daira_name: "سيدي مزغيش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 784, commune_name: "سيدي مزغيش", daira_name: "سيدي مزغيش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 758, commune_name: "بني بشير", daira_name: "رمضان جمال", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 782, commune_name: "رمضان جمال", daira_name: "رمضان جمال", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 761, commune_name: "بين الويدان", daira_name: "تمالوس", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 770, commune_name: "مجاز الدشيش", daira_name: "الحروش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 786, commune_name: "تمالوس", daira_name: "تمالوس", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 753, commune_name: "عين قشرة", daira_name: "عين قشرة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 778, commune_name: "الولجة بولبلوط", daira_name: "عين قشرة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 781, commune_name: "أم الطوب", daira_name: "أم الطوب", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 767, commune_name: "الغدير", daira_name: "عزابة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 775, commune_name: "الكركرة", daira_name: "تمالوس", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 766, commune_name: "الحروش", daira_name: "الحروش", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 788, commune_name: "الزيتونة", daira_name: "الزيتونة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 779, commune_name: "أولاد عطية", daira_name: "أولاد عطية", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 777, commune_name: "وادي الزهور", daira_name: "أولاد عطية", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 764, commune_name: "القل", daira_name: "القل", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 763, commune_name: "الشرايع", daira_name: "القل", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 760, commune_name: "بني زيد", daira_name: "القل", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 776, commune_name: "خناق مايو", daira_name: "أولاد عطية", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 769, commune_name: "المرسى", daira_name: "بن عزوز", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 757, commune_name: "بن عزوز", daira_name: "بن عزوز", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 756, commune_name: "بكوش لخضر", daira_name: "بن عزوز", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 771, commune_name: "السبت", daira_name: "عزابة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 752, commune_name: "عين شرشار", daira_name: "عزابة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 755, commune_name: "عزابة", daira_name: "عزابة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 762, commune_name: "بوشطاطة", daira_name: "الحدائق", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 772, commune_name: "فلفلة", daira_name: "سكيكدة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 773, commune_name: "حمادي كرومة", daira_name: "سكيكدة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 785, commune_name: "سكيكدة", daira_name: "سكيكدة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 754, commune_name: "عين زويت", daira_name: "الحدائق", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 765, commune_name: "جندل سعدي محمد", daira_name: "عزابة", wilaya_code: "21", wilaya_name: "سكيكدة" },
{ id: 774, commune_name: "قنواع", daira_name: "الزيتونة", wilaya_code: "21", wilaya_name: "سكيكدة" },

,

{ id: 822, commune_name: "سيدي علي بن يوب", daira_name: "سيدي علي بن يوب", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 814, commune_name: "مولاي سليسن", daira_name: "مولاي سليسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 804, commune_name: "الحصيبة", daira_name: "مولاي سليسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 792, commune_name: "عين تندمين", daira_name: "مولاي سليسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 837, commune_name: "تنيرة", daira_name: "تنيرة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 816, commune_name: "وادي سفيون", daira_name: "تنيرة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 805, commune_name: "حاسي دحو", daira_name: "تنيرة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 817, commune_name: "وادي تاوريرة", daira_name: "مرين", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 798, commune_name: "بن عشيبة شلية", daira_name: "تنيرة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 831, commune_name: "سيدي يعقوب", daira_name: "سيدي لحسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 830, commune_name: "سيدي لحسن", daira_name: "سيدي لحسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 829, commune_name: "سيدي خالد", daira_name: "سيدي لحسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 832, commune_name: "طابية", daira_name: "سيدي علي بن يوب", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 825, commune_name: "سيدي ابراهيم", daira_name: "عين البرد", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 794, commune_name: "العمارنة", daira_name: "سيدي لحسن", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 801, commune_name: "بوخنفيس", daira_name: "سيدي علي بن يوب", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 806, commune_name: "حاسي زهانة", daira_name: "بن باديس", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 802, commune_name: "شيطوان البلايلة", daira_name: "بن باديس", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 797, commune_name: "بن باديس", daira_name: "بن باديس", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 795, commune_name: "بضرابين المقراني", daira_name: "بن باديس", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 821, commune_name: "سفيزف", daira_name: "سفيزف", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 810, commune_name: "مسيد", daira_name: "سفيزف", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 800, commune_name: "بوجبهة البرج", daira_name: "سفيزف", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 793, commune_name: "عين أدن", daira_name: "سفيزف", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 828, commune_name: "سيدي حمادوش", daira_name: "عين البرد", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 826, commune_name: "سيدي شعيب", daira_name: "مرحوم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 808, commune_name: "مكدرة", daira_name: "عين البرد", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 789, commune_name: "عين البرد", daira_name: "عين البرد", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 819, commune_name: "رجم دموش", daira_name: "راس الماء", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 818, commune_name: "راس الماء", daira_name: "راس الماء", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 815, commune_name: "وادي السبع", daira_name: "راس الماء", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 809, commune_name: "مرحوم", daira_name: "مرحوم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 824, commune_name: "سيدي بلعباس", daira_name: "سيدي بلعباس", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 791, commune_name: "عين الثريد", daira_name: "تسالة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 820, commune_name: "السهالة الثورة", daira_name: "تسالة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 838, commune_name: "تسالة", daira_name: "تسالة", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 796, commune_name: "بلعربي", daira_name: "مصطفى بن ابراهيم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 813, commune_name: "مصطفى بن ابراهيم", daira_name: "مصطفى بن ابراهيم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 839, commune_name: "تلموني", daira_name: "مصطفى بن ابراهيم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 840, commune_name: "زروالة", daira_name: "مصطفى بن ابراهيم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 803, commune_name: "الضاية", daira_name: "تلاغ", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 812, commune_name: "مزاورو", daira_name: "تلاغ", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 835, commune_name: "تغاليمت", daira_name: "تلاغ", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 836, commune_name: "تلاغ", daira_name: "تلاغ", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 790, commune_name: "عين قادة", daira_name: "سيدي علي بوسيدي", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 807, commune_name: "لمطار", daira_name: "سيدي علي بوسيدي", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 823, commune_name: "سيدي علي بوسيدي", daira_name: "سيدي علي بوسيدي", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 827, commune_name: "سيدي دحو الزاير", daira_name: "سيدي علي بوسيدي", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 799, commune_name: "بئر الحمام", daira_name: "مرحوم", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 811, commune_name: "مرين", daira_name: "مرين", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 834, commune_name: "تفسور", daira_name: "مرين", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },
{ id: 833, commune_name: "تاودموت", daira_name: "مرين", wilaya_code: "22", wilaya_name: "سيدي بلعباس" },

, 

{
  id: 842,
  commune_name: "عنابة",
  daira_name: "عنابة",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 850,
  commune_name: "سرايدي",
  daira_name: "عنابة",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 843,
  commune_name: "برحال",
  daira_name: "برحال",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 849,
  commune_name: "واد العنب",
  daira_name: "برحال",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 848,
  commune_name: "الحجار",
  daira_name: "الحجار",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 851,
  commune_name: "سيدي عمار",
  daira_name: "الحجار",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 846,
  commune_name: "البوني",
  daira_name: "البوني",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 841,
  commune_name: "عين الباردة",
  daira_name: "عين الباردة",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 845,
  commune_name: "الشرفة",
  daira_name: "عين الباردة",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 847,
  commune_name: "العلمة",
  daira_name: "عين الباردة",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 852,
  commune_name: "التريعات",
  daira_name: "برحال",
  wilaya_code: "23",
  wilaya_name: "عنابة"
},
{
  id: 844,
  commune_name: "شطايبي",
  daira_name: "شطايبي",
  wilaya_code: "23",
  wilaya_name: "عنابة"
}

,

{
  id: 875,
  commune_name: "نشماية",
  daira_name: "قلعة بوصبع",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 863,
  commune_name: "بوحمدان",
  daira_name: "حمام دباغ",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 872,
  commune_name: "حمام دباغ",
  daira_name: "حمام دباغ",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 884,
  commune_name: "الركنية",
  daira_name: "حمام دباغ",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 867,
  commune_name: "الدهوارة",
  daira_name: "حمام النبايل",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 873,
  commune_name: "حمام النبايل",
  daira_name: "حمام النبايل",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 871,
  commune_name: "قالمة",
  daira_name: "قالمة",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 866,
  commune_name: "بومهرة أحمد",
  daira_name: "قلعة بوصبع",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 853,
  commune_name: "عين بن بيضاء",
  daira_name: "بوشقوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 865,
  commune_name: "بوشقوف",
  daira_name: "بوشقوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 878,
  commune_name: "مجاز الصفاء",
  daira_name: "بوشقوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 881,
  commune_name: "وادي فراغة",
  daira_name: "بوشقوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 864,
  commune_name: "بوعاتي محمود",
  daira_name: "هيليوبوليس",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 869,
  commune_name: "الفجوج",
  daira_name: "هيليوبوليس",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 874,
  commune_name: "هيليوبوليس",
  daira_name: "هيليوبوليس",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 877,
  commune_name: "مجاز عمار",
  daira_name: "عين حساينية",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 879,
  commune_name: "هواري بومدين",
  daira_name: "عين حساينية",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 883,
  commune_name: "رأس العقبة",
  daira_name: "عين حساينية",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 885,
  commune_name: "سلاوة عنونة",
  daira_name: "عين حساينية",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 868,
  commune_name: "جبالة الخميسي",
  daira_name: "قلعة بوصبع",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 861,
  commune_name: "برج صباط",
  daira_name: "وادي الزناتي",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 882,
  commune_name: "وادي الزناتي",
  daira_name: "وادي الزناتي",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 856,
  commune_name: "عين رقادة",
  daira_name: "وادي الزناتي",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 854,
  commune_name: "عين العربي",
  daira_name: "عين مخلوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 855,
  commune_name: "عين مخلوف",
  daira_name: "عين مخلوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 886,
  commune_name: "تاملوكة",
  daira_name: "عين مخلوف",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 857,
  commune_name: "عين صندل",
  daira_name: "خزارة",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 862,
  commune_name: "بوحشانة",
  daira_name: "خزارة",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 876,
  commune_name: "لخزارة",
  daira_name: "خزارة",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 858,
  commune_name: "بلخير",
  daira_name: "قلعة بوصبع",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 860,
  commune_name: "بني مزلين",
  daira_name: "قلعة بوصبع",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 870,
  commune_name: "قلعة بوصبع",
  daira_name: "قلعة بوصبع",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 880,
  commune_name: "وادي الشحم",
  daira_name: "حمام النبايل",
  wilaya_code: "24",
  wilaya_name: "قالمة"
},
{
  id: 859,
  commune_name: "بن جراح",
  daira_name: "قالمة",
  wilaya_code: "24",
  wilaya_name: "قالمة"
}


,


{
  id: 892,
  commune_name: "ديدوش مراد",
  daira_name: "حامة بوزيان",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 894,
  commune_name: "حامة بوزيان",
  daira_name: "حامة بوزيان",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 890,
  commune_name: "بني حميدان",
  daira_name: "زيغود يوسف",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 898,
  commune_name: "زيغود يوسف",
  daira_name: "زيغود يوسف",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 888,
  commune_name: "عين السمارة",
  daira_name: "الخروب",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 893,
  commune_name: "الخروب",
  daira_name: "الخروب",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 897,
  commune_name: "أولاد رحمون",
  daira_name: "الخروب",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 887,
  commune_name: "عين عبيد",
  daira_name: "عين عبيد",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 889,
  commune_name: "أبن باديس الهرية",
  daira_name: "عين عبيد",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 895,
  commune_name: "ابن زياد",
  daira_name: "ابن زياد",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 896,
  commune_name: "بوجريو مسعود",
  daira_name: "ابن زياد",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
},
{
  id: 891,
  commune_name: "قسنطينة",
  daira_name: "قسنطينة",
  wilaya_code: "25",
  wilaya_name: "قسنطينة"
}

,

{
  id: 943,
  commune_name: "أولاد هلال",
  daira_name: "أولاد عنتر",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 956,
  commune_name: "السواقي",
  daira_name: "السواقي",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 929,
  commune_name: "قصر البخاري",
  daira_name: "قصر البخاري",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 934,
  commune_name: "مفاتحة",
  daira_name: "قصر البخاري",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 947,
  commune_name: "السانق",
  daira_name: "قصر البخاري",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 920,
  commune_name: "العزيزية",
  daira_name: "العزيزية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 930,
  commune_name: "مغراوة",
  daira_name: "العزيزية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 935,
  commune_name: "ميهوب",
  daira_name: "العزيزية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 909,
  commune_name: "بوعيش",
  daira_name: "الشهبونية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 912,
  commune_name: "بوغزول",
  daira_name: "الشهبونية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 914,
  commune_name: "الشهبونية",
  daira_name: "الشهبونية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 926,
  commune_name: "حناشة",
  daira_name: "عوامري",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 936,
  commune_name: "عوامري",
  daira_name: "عوامري",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 937,
  commune_name: "وادي حربيل",
  daira_name: "عوامري",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 905,
  commune_name: "بني سليمان",
  daira_name: "بني سليمان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 910,
  commune_name: "بوعيشون",
  daira_name: "سي المحجوب",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 939,
  commune_name: "أولاد بوعشرة",
  daira_name: "سي المحجوب",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 950,
  commune_name: "سي المحجوب",
  daira_name: "سي المحجوب",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 913,
  commune_name: "بوسكن",
  daira_name: "بني سليمان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 953,
  commune_name: "سيدي الربيع",
  daira_name: "بني سليمان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 906,
  commune_name: "البرواقية",
  daira_name: "البرواقية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 941,
  commune_name: "أولاد دايد",
  daira_name: "البرواقية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 946,
  commune_name: "الربعية",
  daira_name: "البرواقية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 932,
  commune_name: "مجبر",
  daira_name: "سغوان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 961,
  commune_name: "ثلاث دوائر",
  daira_name: "سغوان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 962,
  commune_name: "الزبيرية",
  daira_name: "سغوان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 901,
  commune_name: "العيساوية",
  daira_name: "تابلاط",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 923,
  commune_name: "الحوضان",
  daira_name: "تابلاط",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 933,
  commune_name: "مزغنة",
  daira_name: "تابلاط",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 957,
  commune_name: "تابلاط",
  daira_name: "تابلاط",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 908,
  commune_name: "بوغار",
  daira_name: "أولاد عنتر",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 949,
  commune_name: "سغوان",
  daira_name: "سغوان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 919,
  commune_name: "ذراع السمار",
  daira_name: "المدية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 931,
  commune_name: "المدية",
  daira_name: "المدية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 959,
  commune_name: "تمسقيدة",
  daira_name: "المدية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 904,
  commune_name: "بن شكاو",
  daira_name: "وزرة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 922,
  commune_name: "الحمدانية",
  daira_name: "وزرة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 945,
  commune_name: "وزرة",
  daira_name: "وزرة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 960,
  commune_name: "تيزي مهدي",
  daira_name: "وزرة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 899,
  commune_name: "عين بوسيف",
  daira_name: "عين بوسيف",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 925,
  commune_name: "العوينات",
  daira_name: "عين بوسيف",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 927,
  commune_name: "الكاف الاخضر",
  daira_name: "عين بوسيف",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 942,
  commune_name: "أولاد امعرف",
  daira_name: "عين بوسيف",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 951,
  commune_name: "سيدي دامد",
  daira_name: "عين بوسيف",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 903,
  commune_name: "بعطة",
  daira_name: "العمارية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 924,
  commune_name: "العمارية",
  daira_name: "العمارية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 940,
  commune_name: "أولاد إبراهيم",
  daira_name: "العمارية",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 907,
  commune_name: "بئر بن عابد",
  daira_name: "القلب الكبير",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 921,
  commune_name: "القلب الكبير",
  daira_name: "القلب الكبير",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 948,
  commune_name: "سدراية",
  daira_name: "القلب الكبير",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 900,
  commune_name: "عين اقصير",
  daira_name: "شلالة العذاورة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 915,
  commune_name: "شلالة العذاورة",
  daira_name: "شلالة العذاورة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 916,
  commune_name: "شنيقل",
  daira_name: "شلالة العذاورة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 958,
  commune_name: "تفراوت",
  daira_name: "شلالة العذاورة",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 911,
  commune_name: "بوشراحيل",
  daira_name: "سيدي نعمان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 928,
  commune_name: "خمس جوامع",
  daira_name: "سيدي نعمان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 952,
  commune_name: "سيدي نعمان",
  daira_name: "سيدي نعمان",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 902,
  commune_name: "عزيز",
  daira_name: "عزيز",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 917,
  commune_name: "دراق",
  daira_name: "عزيز",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 944,
  commune_name: "أم الجليل",
  daira_name: "عزيز",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 918,
  commune_name: "جواب",
  daira_name: "السواقي",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 954,
  commune_name: "سيدي زهار",
  daira_name: "السواقي",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 955,
  commune_name: "سيدي زيان",
  daira_name: "السواقي",
  wilaya_code: "26",
  wilaya_name: "المدية"
},
{
  id: 938,
  commune_name: "أولاد عنتر",
  daira_name: "أولاد عنتر",
  wilaya_code: "26",
  wilaya_name: "المدية"
}

,

  { id: 970, commune_name: "فرناقة", daira_name: "عين نويسي", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 981, commune_name: "وادي الخير", daira_name: "عين تادلس", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 973, commune_name: "الحسيان (بني ياحي", daira_name: "عين نويسي", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 972, commune_name: "حاسي ماماش", daira_name: "حاسي ماماش", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 977, commune_name: "مزغران", daira_name: "حاسي ماماش", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 992, commune_name: "ستيدية", daira_name: "حاسي ماماش", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 967, commune_name: "عين تادلس", daira_name: "عين تادلس", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 987, commune_name: "سيدي بلعطار", daira_name: "عين تادلس", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 991, commune_name: "سور", daira_name: "عين تادلس", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 964, commune_name: "عين بودينار", daira_name: "خير الدين", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 975, commune_name: "خير الدين", daira_name: "خير الدين", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 985, commune_name: "صيادة", daira_name: "خير الدين", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 986, commune_name: "سيدي علي", daira_name: "سيدي علي", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 993, commune_name: "تزقايت", daira_name: "سيدي علي", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 968, commune_name: "بن عبد المالك رمضان", daira_name: "سيدي لخضر", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 979, commune_name: "مستغانم", daira_name: "مستغانم", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 971, commune_name: "حجاج", daira_name: "سيدي لخضر", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 988, commune_name: "سيدي لخضر", daira_name: "سيدي لخضر", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 963, commune_name: "عشعاشة", daira_name: "عشعاشة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 974, commune_name: "خضرة", daira_name: "عشعاشة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 980, commune_name: "نكمارية", daira_name: "عشعاشة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 982, commune_name: "أولاد بوغالم", daira_name: "عشعاشة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 969, commune_name: "بوقيراط", daira_name: "بوقيراط", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 984, commune_name: "صفصاف", daira_name: "بوقيراط", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 989, commune_name: "سيرات", daira_name: "بوقيراط", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 990, commune_name: "السوافلية", daira_name: "بوقيراط", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 966, commune_name: "عين سيدي الشريف", daira_name: "ماسرة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 976, commune_name: "منصورة", daira_name: "ماسرة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 978, commune_name: "ماسرة", daira_name: "ماسرة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 994, commune_name: "الطواهرية", daira_name: "ماسرة", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 965, commune_name: "عين نويسي", daira_name: "عين نويسي", wilaya_code: "27", wilaya_name: "مستغانم" },
  { id: 983, commune_name: "أولاد مع الله", daira_name: "سيدي علي", wilaya_code: "27", wilaya_name: "مستغانم" }
,

  {
    id: 1008, 
    commune_name: "شلال",
    daira_name: "شلال",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1028,
    commune_name: "أولاد ماضي",
    daira_name: "شلال",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1014,
    commune_name: "خطوطي سد الجير",
    daira_name: "شلال",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1000,
    commune_name: "بلعايبة",
    daira_name: "مقرة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1004,
    commune_name: "برهوم",
    daira_name: "مقرة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1009,
    commune_name: "دهاهنة",
    daira_name: "مقرة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1018,
    commune_name: "مقرة",
    daira_name: "مقرة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1002,
    commune_name: "بني يلمان",
    daira_name: "سيدي عيسى",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1007,
    commune_name: "بوطي السايح",
    daira_name: "سيدي عيسى",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1033,
    commune_name: "سيدي عيسى",
    daira_name: "سيدي عيسى",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 995,
    commune_name: "عين الحجل",
    daira_name: "عين الحجل",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1035,
    commune_name: "سيدي هجرس",
    daira_name: "عين الحجل",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1006,
    commune_name: "بوسعادة",
    daira_name: "بوسعادة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1011,
    commune_name: "الهامل",
    daira_name: "بوسعادة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1032,
    commune_name: "ولتام",
    daira_name: "بوسعادة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1003,
    commune_name: "بن زوه",
    daira_name: "أولاد سيدي ابراهيم",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1030,
    commune_name: "أولاد سيدي ابراهيم",
    daira_name: "أولاد سيدي ابراهيم",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1034,
    commune_name: "سيدي عامر",
    daira_name: "سيدي عامر",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1039,
    commune_name: "تامسة",
    daira_name: "سيدي عامر",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1001,
    commune_name: "بن سرور",
    daira_name: "بن سرور",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1022,
    commune_name: "محمد بوضياف",
    daira_name: "بن سرور",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1031,
    commune_name: "أولاد سليمان",
    daira_name: "بن سرور",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1041,
    commune_name: "زرزور",
    daira_name: "بن سرور",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 996,
    commune_name: "عين الملح",
    daira_name: "عين الملح",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 997,
    commune_name: "عين فارس",
    daira_name: "عين الملح",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 999,
    commune_name: "عين الريش",
    daira_name: "عين الملح",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1005,
    commune_name: "بئر فضة",
    daira_name: "عين الملح",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1036,
    commune_name: "سيدي امحمد",
    daira_name: "عين الملح",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1020,
    commune_name: "امجدل",
    daira_name: "امجدل",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1021,
    commune_name: "مناعة",
    daira_name: "امجدل",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1010,
    commune_name: "جبل مساعد",
    daira_name: "جبل مساعد",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1037,
    commune_name: "سليم",
    daira_name: "جبل مساعد",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1023,
    commune_name: "المسيلة",
    daira_name: "المسيلة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1013,
    commune_name: "حمام الضلعة",
    daira_name: "حمام الضلعة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1025,
    commune_name: "ونوغة",
    daira_name: "حمام الضلعة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1029,
    commune_name: "أولاد منصور",
    daira_name: "حمام الضلعة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1040,
    commune_name: "تارمونت",
    daira_name: "حمام الضلعة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1016,
    commune_name: "المعاضيد",
    daira_name: "أولاد دراج",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1024,
    commune_name: "المطارفة",
    daira_name: "أولاد دراج",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1017,
    commune_name: "معاريف",
    daira_name: "شلال",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1027,
    commune_name: "أولاد دراج",
    daira_name: "أولاد دراج",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1038,
    commune_name: "السوامع",
    daira_name: "أولاد دراج",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1012,
    commune_name: "الحوامد",
    daira_name: "خبانة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1015,
    commune_name: "خبانة",
    daira_name: "خبانة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1019,
    commune_name: "مسيف",
    daira_name: "خبانة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 998,
    commune_name: "عين الخضراء",
    daira_name: "مقرة",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
},
{
    id: 1026,
    commune_name: "أولاد عدي لقبالة",
    daira_name: "أولاد دراج",
    wilaya_code: "28",
    wilaya_name: "المسيلة"
}

,

  {
    id: 1075,
    commune_name: "وادي الأبطال",
    daira_name: "وادي الأبطال",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1081,
    commune_name: "سيدي عبد المومن",
    daira_name: "المحمدية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1078,
    commune_name: "سجرارة",
    daira_name: "المحمدية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1072,
    commune_name: "المحمدية",
    daira_name: "المحمدية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1085,
    commune_name: "تيغنيف",
    daira_name: "تيغنيف",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1071,
    commune_name: "مقطع الدوز",
    daira_name: "المحمدية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1060,
    commune_name: "فراقيق",
    daira_name: "المحمدية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1054,
    commune_name: "الغمري",
    daira_name: "المحمدية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1087,
    commune_name: "زهانة",
    daira_name: "زهانة",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1053,
    commune_name: "القعدة",
    daira_name: "زهانة",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1077,
    commune_name: "رأس عين عميروش",
    daira_name: "عقاز",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1074,
    commune_name: "عقاز",
    daira_name: "عقاز",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1046,
    commune_name: "العلايمية",
    daira_name: "عقاز",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1084,
    commune_name: "سيق",
    daira_name: "سيق",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1051,
    commune_name: "الشرفاء",
    daira_name: "سيق",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1049,
    commune_name: "بوهني",
    daira_name: "سيق",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1058,
    commune_name: "المأمونية",
    daira_name: "عين فارس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1055,
    commune_name: "القطنة",
    daira_name: "بوحنيفية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1042,
    commune_name: "عين فارس",
    daira_name: "عين فارس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1062,
    commune_name: "غروس",
    daira_name: "عوف",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1048,
    commune_name: "بنيان",
    daira_name: "عوف",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1047,
    commune_name: "عوف",
    daira_name: "عوف",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1064,
    commune_name: "قرجوم",
    daira_name: "وادي التاغية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1045,
    commune_name: "عين أفرص",
    daira_name: "عين فكان",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1043,
    commune_name: "عين فكان",
    daira_name: "عين فكان",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1066,
    commune_name: "خلوية",
    daira_name: "البرج",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1059,
    commune_name: "المنور",
    daira_name: "البرج",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1052,
    commune_name: "البرج",
    daira_name: "البرج",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1082,
    commune_name: "سيدي بوسعيد",
    daira_name: "غريس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1070,
    commune_name: "المطمور",
    daira_name: "غريس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1083,
    commune_name: "سيدي قادة",
    daira_name: "تيغنيف",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1067,
    commune_name: "ماقضة",
    daira_name: "غريس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1069,
    commune_name: "معسكر",
    daira_name: "معسكر",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1050,
    commune_name: "بوحنيفية",
    daira_name: "بوحنيفية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1063,
    commune_name: "غريس",
    daira_name: "غريس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1065,
    commune_name: "حسين",
    daira_name: "بوحنيفية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1057,
    commune_name: "القرط",
    daira_name: "تيزي",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1061,
    commune_name: "فروحة",
    daira_name: "تيزي",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1086,
    commune_name: "تيزي",
    daira_name: "تيزي",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1079,
    commune_name: "السهايلية",
    daira_name: "تيغنيف",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1068,
    commune_name: "ماوسة",
    daira_name: "غريس",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1080,
    commune_name: "سيدي عبد الجبار",
    daira_name: "وادي الأبطال",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1056,
    commune_name: "الحشم",
    daira_name: "الحشم",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1073,
    commune_name: "نسمط",
    daira_name: "الحشم",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1088,
    commune_name: "زلامطة",
    daira_name: "الحشم",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1044,
    commune_name: "عين فراح",
    daira_name: "وادي الأبطال",
    wilaya_code: "29",
    wilaya_name: "معسكر"
},
{
    id: 1076,
    commune_name: "وادي التاغية",
    daira_name: "وادي التاغية",
    wilaya_code: "29",
    wilaya_name: "معسكر"
}

  ,

  {
    id: 1101,
    commune_name: "ورقلة",
    daira_name: "ورقلة",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1096,
    commune_name: "حاسي مسعود",
    daira_name: "حاسي مسعود",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1089,
    commune_name: "عين البيضاء",
    daira_name: "سيدي خويلد",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1095,
    commune_name: "حاسي بن عبد الله",
    daira_name: "سيدي خويلد",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1103,
    commune_name: "سيدي خويلد",
    daira_name: "سيدي خويلد",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1093,
    commune_name: "البرمة",
    daira_name: "البرمة",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1102,
    commune_name: "الرويسات",
    daira_name: "ورقلة",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
},
{
    id: 1100,
    commune_name: "انقوسة",
    daira_name: "انقوسة",
    wilaya_code: "30",
    wilaya_name: "ورقلة"
}

  ,

  {
    id: 1134,
    commune_name: "سيدي الشحمي",
    daira_name: "السانية",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1127,
    commune_name: "حاسي مفسوخ",
    daira_name: "قديل",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1116,
    commune_name: "بئر الجير",
    daira_name: "بئر الجير",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1125,
    commune_name: "حاسي بن عقبة",
    daira_name: "بئر الجير",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1124,
    commune_name: "قديل",
    daira_name: "قديل",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1126,
    commune_name: "حاسي بونيف",
    daira_name: "بئر الجير",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1122,
    commune_name: "الكرمة",
    daira_name: "السانية",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1123,
    commune_name: "السانية",
    daira_name: "السانية",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1114,
    commune_name: "بن فريحة",
    daira_name: "قديل",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1113,
    commune_name: "أرزيو",
    daira_name: "أرزيو",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1133,
    commune_name: "سيدي بن يبقى",
    daira_name: "أرزيو",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1110,
    commune_name: "عين البية",
    daira_name: "بطيوة",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1115,
    commune_name: "بطيوة",
    daira_name: "بطيوة",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1128,
    commune_name: "مرسى الحجاج",
    daira_name: "بطيوة",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1112,
    commune_name: "عين الترك",
    daira_name: "عين الترك",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1131,
    commune_name: "وهران",
    daira_name: "وهران",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1120,
    commune_name: "العنصر",
    daira_name: "عين الترك",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1129,
    commune_name: "المرسى الكبير",
    daira_name: "عين الترك",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1117,
    commune_name: "بوفاتيس",
    daira_name: "وادي تليلات",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1121,
    commune_name: "البراية",
    daira_name: "وادي تليلات",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1132,
    commune_name: "وادي تليلات",
    daira_name: "وادي تليلات",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1111,
    commune_name: "عين الكرمة",
    daira_name: "بوتليليس",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1119,
    commune_name: "بوتليليس",
    daira_name: "بوتليليس",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1130,
    commune_name: "مسرغين",
    daira_name: "بوتليليس",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1118,
    commune_name: "بوسفر",
    daira_name: "عين الترك",
    wilaya_code: "31",
    wilaya_name: "وهران"
},
{
    id: 1135,
    commune_name: "طفراوي",
    daira_name: "وادي تليلات",
    wilaya_code: "31",
    wilaya_name: "وهران"
}

,

  {
    id: 1136,
    commune_name: "عين العراك",
    daira_name: "الأبيض سيدي الشيخ",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1151,
    commune_name: "كراكدة",
    daira_name: "بريزينة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1154,
    commune_name: "سيدي سليمان",
    daira_name: "بوعلام",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1153,
    commune_name: "سيدي عامر",
    daira_name: "بوعلام",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1138,
    commune_name: "بوعلام",
    daira_name: "بوعلام",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1146,
    commune_name: "البنود",
    daira_name: "الأبيض سيدي الشيخ",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1139,
    commune_name: "بوقطب",
    daira_name: "بوقطب",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1147,
    commune_name: "الخيثر",
    daira_name: "بوقطب",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1157,
    commune_name: "توسمولين",
    daira_name: "بوقطب",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1155,
    commune_name: "سيدي طيفور",
    daira_name: "بوعلام",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1156,
    commune_name: "ستيتن",
    daira_name: "بوعلام",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1144,
    commune_name: "البيض",
    daira_name: "البيض",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1152,
    commune_name: "رقاصة",
    daira_name: "رقاصة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1148,
    commune_name: "المحرة",
    daira_name: "شلالة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1150,
    commune_name: "الكاف الأحمر",
    daira_name: "رقاصة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1141,
    commune_name: "بريزينة",
    daira_name: "بريزينة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1149,
    commune_name: "الغاسول",
    daira_name: "بريزينة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1145,
    commune_name: "الأبيض سيدي الشيخ",
    daira_name: "الأبيض سيدي الشيخ",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1140,
    commune_name: "بوسمغون",
    daira_name: "بوسمغون",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1142,
    commune_name: "الشقيق",
    daira_name: "رقاصة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1143,
    commune_name: "شلالة",
    daira_name: "شلالة",
    wilaya_code: "32",
    wilaya_name: "البيض"
},
{
    id: 1137,
    commune_name: "اربوات",
    daira_name: "الأبيض سيدي الشيخ",
    wilaya_code: "32",
    wilaya_name: "البيض"
},

{
    id: 1159,
    commune_name: "برج عمر إدريس",
    daira_name: "إن أمناس",
    wilaya_code: "33",
    wilaya_name: "إليزي"
},
{
    id: 1160,
    commune_name: "دبداب",
    daira_name: "إن أمناس",
    wilaya_code: "33",
    wilaya_name: "إليزي"
},
{
    id: 1163,
    commune_name: "إن أمناس",
    daira_name: "إن أمناس",
    wilaya_code: "33",
    wilaya_name: "إليزي"
},
{
    id: 1162,
    commune_name: "إيليزي",
    daira_name: "إيليزي",
    wilaya_code: "33",
    wilaya_name: "إليزي"
},

{
  id: 1177,
  commune_name: "الحمادية",
  daira_name: "الحمادية",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1189,
  commune_name: "أولاد سيدي ابراهيم",
  daira_name: "المنصورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1164,
  commune_name: "عين تاغروت",
  daira_name: "عين تاغروت",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1197,
  commune_name: "تيكستار",
  daira_name: "عين تاغروت",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1167,
  commune_name: "بليمور",
  daira_name: "برج الغدير",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1176,
  commune_name: "العناصر",
  daira_name: "برج الغدير",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1180,
  commune_name: "غيلاسة",
  daira_name: "برج الغدير",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1194,
  commune_name: "تقلعيت",
  daira_name: "برج الغدير",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1170,
  commune_name: "برج الغدير",
  daira_name: "برج الغدير",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1174,
  commune_name: "العش",
  daira_name: "الحمادية",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1192,
  commune_name: "سيدي أمبارك",
  daira_name: "بئر قاصد علي",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1183,
  commune_name: "خليل",
  daira_name: "بئر قاصد علي",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1169,
  commune_name: "بئر قاصد علي",
  daira_name: "بئر قاصد علي",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1193,
  commune_name: "تفرق",
  daira_name: "جعافرة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1178,
  commune_name: "الماين",
  daira_name: "جعافرة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1173,
  commune_name: "جعافرة",
  daira_name: "جعافرة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1172,
  commune_name: "القلة",
  daira_name: "جعافرة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1196,
  commune_name: "ثنية النصر",
  daira_name: "مجانة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1179,
  commune_name: "المهير",
  daira_name: "المنصورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1184,
  commune_name: "القصور",
  daira_name: "الحمادية",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1185,
  commune_name: "المنصورة",
  daira_name: "المنصورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1181,
  commune_name: "حرازة",
  daira_name: "المنصورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1190,
  commune_name: "الرابطة",
  daira_name: "الحمادية",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1175,
  commune_name: "الياشير",
  daira_name: "مجانة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1182,
  commune_name: "حسناوة",
  daira_name: "مجانة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1186,
  commune_name: "مجانة",
  daira_name: "مجانة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1165,
  commune_name: "عين تسرة",
  daira_name: "رأس الوادي",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1187,
  commune_name: "أولاد أبراهم",
  daira_name: "رأس الوادي",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1191,
  commune_name: "رأس الوادي",
  daira_name: "رأس الوادي",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1171,
  commune_name: "برج زمورة",
  daira_name: "برج زمورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1188,
  commune_name: "أولاد دحمان",
  daira_name: "برج زمورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1195,
  commune_name: "تسامرت",
  daira_name: "برج زمورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1166,
  commune_name: "برج بوعريرج",
  daira_name: "برج بوعريريج",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
},
{
  id: 1168,
  commune_name: "بن داود",
  daira_name: "المنصورة",
  wilaya_code: "34",
  wilaya_name: "برج بوعريريج"
} , 


{
  id: 1212,
  commune_name: "الخروبة",
  daira_name: "بودواو",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1210,
  commune_name: "دلس",
  daira_name: "دلس",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1201,
  commune_name: "بن شود",
  daira_name: "دلس",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1198,
  commune_name: "أعفير",
  daira_name: "دلس",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1226,
  commune_name: "الثنية",
  daira_name: "الثنية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1202,
  commune_name: "بني عمران",
  daira_name: "الثنية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1215,
  commune_name: "خميس الخشنة",
  daira_name: "خميس الخشنة",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1199,
  commune_name: "عمال",
  daira_name: "الثنية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1228,
  commune_name: "تيمزريت",
  daira_name: "يسر",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1229,
  commune_name: "زموري",
  daira_name: "برج منايل",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1216,
  commune_name: "الاربعطاش",
  daira_name: "خميس الخشنة",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1214,
  commune_name: "يسر",
  daira_name: "يسر",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1208,
  commune_name: "شعبة العامر",
  daira_name: "يسر",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1219,
  commune_name: "أولاد عيسى",
  daira_name: "الناصرية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1218,
  commune_name: "الناصرية",
  daira_name: "الناصرية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1207,
  commune_name: "بوزقزة قدارة",
  daira_name: "بودواو",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1224,
  commune_name: "سوق الحد",
  daira_name: "الثنية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1223,
  commune_name: "سيدي داود",
  daira_name: "بغلية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1200,
  commune_name: "بغلية",
  daira_name: "بغلية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1217,
  commune_name: "لقاطة",
  daira_name: "برج منايل",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1211,
  commune_name: "جنات",
  daira_name: "برج منايل",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1227,
  commune_name: "تيجلابين",
  daira_name: "بومرداس",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1222,
  commune_name: "سي مصطفى",
  daira_name: "يسر",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1220,
  commune_name: "أولاد هداج",
  daira_name: "بودواو",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1221,
  commune_name: "أولاد موسى",
  daira_name: "خميس الخشنة",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1206,
  commune_name: "بومرداس",
  daira_name: "بومرداس",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1209,
  commune_name: "قورصو",
  daira_name: "بومرداس",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1203,
  commune_name: "برج منايل",
  daira_name: "برج منايل",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1204,
  commune_name: "بودواو",
  daira_name: "بودواو",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1205,
  commune_name: "بودواو البحري",
  daira_name: "بودواو",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1225,
  commune_name: "تاورقة",
  daira_name: "بغلية",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
},
{
  id: 1213,
  commune_name: "حمادي",
  daira_name: "خميس الخشنة",
  wilaya_code: "35",
  wilaya_name: "بومرداس"
}

,


  {
  id: 1230,
  commune_name: "عين العسل",
  daira_name: "الطارف",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1236,
  commune_name: "بوقوس",
  daira_name: "الطارف",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1246,
  commune_name: "الطارف",
  daira_name: "الطارف",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1253,
  commune_name: "الزيتونة",
  daira_name: "الطارف",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1235,
  commune_name: "البسباس",
  daira_name: "البسباس",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1231,
  commune_name: "عين الكرمة",
  daira_name: "بوحجار",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1237,
  commune_name: "بوحجار",
  daira_name: "بوحجار",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1247,
  commune_name: "حمام بني صالح",
  daira_name: "بوحجار",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1249,
  commune_name: "وادي الزيتون",
  daira_name: "بوحجار",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1233,
  commune_name: "بن مهيدي",
  daira_name: "بن مهيدي",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1234,
  commune_name: "بريحان",
  daira_name: "بن مهيدي",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1239,
  commune_name: "شبيطة مختار",
  daira_name: "الذرعان",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1243,
  commune_name: "الشط",
  daira_name: "بن مهيدي",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1244,
  commune_name: "العيون",
  daira_name: "القالة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1245,
  commune_name: "القالة",
  daira_name: "القالة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1251,
  commune_name: "السوارخ",
  daira_name: "القالة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1252,
  commune_name: "زريزر",
  daira_name: "البسباس",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1238,
  commune_name: "بوثلجة",
  daira_name: "بوثلجة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1240,
  commune_name: "الشافية",
  daira_name: "بوثلجة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1248,
  commune_name: "بحيرة الطيور",
  daira_name: "بوثلجة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1241,
  commune_name: "شحاني",
  daira_name: "الذرعان",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1250,
  commune_name: "رمل السوق",
  daira_name: "القالة",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1232,
  commune_name: "عصفور",
  daira_name: "البسباس",
  wilaya_code: "36",
  wilaya_name: "الطارف"
},
{
  id: 1242,
  commune_name: "الذرعـان",
  daira_name: "الذرعان",
  wilaya_code: "36",
  wilaya_name: "الطارف"
}

,

  {
  id: 1255,
  commune_name: "تندوف",
  daira_name: "تندوف",
  wilaya_code: "37",
  wilaya_name: "تندوف"
},
{
  id: 1254,
  commune_name: "أم العسل",
  daira_name: "تندوف",
  wilaya_code: "37",
  wilaya_name: "تندوف"
}

,

{
    id: 1262,
    commune_name: "خميستي",
    daira_name: "خميستي",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1275,
    commune_name: "ثنية الاحد",
    daira_name: "ثنية الاحد",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1269,
    commune_name: "أولاد بسام",
    daira_name: "تيسمسيلت",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1271,
    commune_name: "سيدي بوتوشنت",
    daira_name: "ثنية الاحد",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1276,
    commune_name: "تيسمسيلت",
    daira_name: "تيسمسيلت",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1272,
    commune_name: "سيدي العنتري",
    daira_name: "لرجام",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1257,
    commune_name: "بني شعيب",
    daira_name: "برج بونعامة",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1258,
    commune_name: "بني لحسن",
    daira_name: "برج بونعامة",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1270,
    commune_name: "سيدي عابد",
    daira_name: "عماري",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1273,
    commune_name: "سيدي سليمان",
    daira_name: "برج بونعامة",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1261,
    commune_name: "بوقائد",
    daira_name: "الأزهرية",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1263,
    commune_name: "الأربعاء",
    daira_name: "الأزهرية",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1266,
    commune_name: "الأزهرية",
    daira_name: "الأزهرية",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1264,
    commune_name: "لرجام",
    daira_name: "لرجام",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1268,
    commune_name: "الملعب",
    daira_name: "لرجام",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1265,
    commune_name: "العيون",
    daira_name: "خميستي",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1274,
    commune_name: "تملاحت",
    daira_name: "لرجام",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1277,
    commune_name: "اليوسفية",
    daira_name: "برج الأمير عبد القادر",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1260,
    commune_name: "برج الأمير عبد القادر",
    daira_name: "برج الأمير عبد القادر",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1256,
    commune_name: "عماري",
    daira_name: "عماري",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1267,
    commune_name: "المعاصم",
    daira_name: "عماري",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},
{
    id: 1259,
    commune_name: "برج بونعامة",
    daira_name: "برج بونعامة",
    wilaya_code: "38",
    wilaya_name: "تيسمسيلت"
},


  {
    id: 1282,
    commune_name: "دوار الماء",
    daira_name: "الطالب العربي",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1283,
    commune_name: "العقلة",
    daira_name: "الرباح",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1291,
    commune_name: "المقرن",
    daira_name: "المقرن",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1301,
    commune_name: "سيدي عون",
    daira_name: "المقرن",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1292,
    commune_name: "اميه وانسة",
    daira_name: "اميه وانسة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1290,
    commune_name: "كوينين",
    daira_name: "الوادي",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1278,
    commune_name: "البياضة",
    daira_name: "البياضة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1294,
    commune_name: "النخلة",
    daira_name: "الرباح",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1299,
    commune_name: "الرباح",
    daira_name: "الرباح",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1286,
    commune_name: "قمار",
    daira_name: "قمار",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1279,
    commune_name: "بن  قشة",
    daira_name: "الطالب العربي",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1297,
    commune_name: "ورماس",
    daira_name: "قمار",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1304,
    commune_name: "تغزوت",
    daira_name: "قمار",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1287,
    commune_name: "الحمراية",
    daira_name: "الرقيبة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1298,
    commune_name: "الرقيبة",
    daira_name: "الرقيبة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1280,
    commune_name: "الدبيلة",
    daira_name: "الدبيلة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1288,
    commune_name: "حساني عبد الكريم",
    daira_name: "الدبيلة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1289,
    commune_name: "حاسي خليفة",
    daira_name: "حاسي خليفة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1307,
    commune_name: "الطريفاوي",
    daira_name: "حاسي خليفة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1305,
    commune_name: "الطالب العربي",
    daira_name: "الطالب العربي",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1295,
    commune_name: "وادي العلندة",
    daira_name: "اميه وانسة",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},
{
    id: 1285,
    commune_name: "الوادي",
    daira_name: "الوادي",
    wilaya_code: "39",
    wilaya_name: "الوادي"
},



{
    id: 1321,
    commune_name: "خيران",
    daira_name: "ششار",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1309,
    commune_name: "بابار",
    daira_name: "بابار",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1316,
    commune_name: "المحمل",
    daira_name: "أولاد رشاش",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1324,
    commune_name: "أولاد رشاش",
    daira_name: "أولاد رشاش",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1314,
    commune_name: "جلال",
    daira_name: "ششار",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1328,
    commune_name: "يابوس",
    daira_name: "بوحمامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1320,
    commune_name: "خنشلة",
    daira_name: "خنشلة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1319,
    commune_name: "قايس",
    daira_name: "قايس",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1313,
    commune_name: "شلية",
    daira_name: "بوحمامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1325,
    commune_name: "الرميلة",
    daira_name: "قايس",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1327,
    commune_name: "تاوزيانت",
    daira_name: "قايس",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1310,
    commune_name: "بغاي",
    daira_name: "الحامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1315,
    commune_name: "الحامة",
    daira_name: "الحامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1318,
    commune_name: "انسيغة",
    daira_name: "الحامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1326,
    commune_name: "طامزة",
    daira_name: "الحامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1308,
    commune_name: "عين الطويلة",
    daira_name: "عين الطويلة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1323,
    commune_name: "متوسة",
    daira_name: "عين الطويلة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1311,
    commune_name: "بوحمامة",
    daira_name: "بوحمامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1317,
    commune_name: "الولجة",
    daira_name: "ششار",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1322,
    commune_name: "مصارة",
    daira_name: "بوحمامة",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},
{
    id: 1312,
    commune_name: "ششار",
    daira_name: "ششار",
    wilaya_code: "40",
    wilaya_name: "خنشلة"
},


{
    id: 1349,
    commune_name: "سوق أهراس",
    daira_name: "سوق أهراس",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1329,
    commune_name: "عين سلطان",
    daira_name: "سدراتة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1347,
    commune_name: "سدراتة",
    daira_name: "سدراتة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1334,
    commune_name: "الحنانشة",
    daira_name: "المشروحة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1337,
    commune_name: "المشروحة",
    daira_name: "المشروحة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1330,
    commune_name: "عين الزانة",
    daira_name: "أولاد إدريس",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1341,
    commune_name: "أولاد إدريس",
    daira_name: "أولاد إدريس",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1351,
    commune_name: "ترقالت",
    daira_name: "أم العظايم",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1343,
    commune_name: "أم العظايم",
    daira_name: "أم العظايم",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1340,
    commune_name: "وادي الكبريت",
    daira_name: "أم العظايم",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1352,
    commune_name: "تيفاش",
    daira_name: "مداوروش",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1345,
    commune_name: "الراقوبة",
    daira_name: "مداوروش",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1332,
    commune_name: "الدريعة",
    daira_name: "تاورة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1350,
    commune_name: "تاورة",
    daira_name: "تاورة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1353,
    commune_name: "الزعرورية",
    daira_name: "تاورة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1333,
    commune_name: "الحدادة",
    daira_name: "الحدادة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1335,
    commune_name: "الخضارة",
    daira_name: "الحدادة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1342,
    commune_name: "أولاد مومن",
    daira_name: "الحدادة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1339,
    commune_name: "المراهنة",
    daira_name: "المراهنة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1344,
    commune_name: "ويلان",
    daira_name: "المراهنة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1348,
    commune_name: "سيدي فرج",
    daira_name: "المراهنة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1331,
    commune_name: "بئر بوحوش",
    daira_name: "بئر بوحوش",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1346,
    commune_name: "سافل الويدان",
    daira_name: "بئر بوحوش",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1336,
    commune_name: "خميسة",
    daira_name: "سدراتة",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1338,
    commune_name: "مداوروش",
    daira_name: "مداوروش",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1354,
    commune_name: "الزوابي",
    daira_name: "بئر بوحوش",
    wilaya_code: "41",
    wilaya_name: "سوق أهراس"
},
{
    id: 1369,
    commune_name: "حجوط",
    daira_name: "حجوط",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1375,
    commune_name: "مراد",
    daira_name: "حجوط",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1374,
    commune_name: "مناصر",
    daira_name: "سيدي أعمر",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1355,
    commune_name: "أغبال",
    daira_name: "قوراية",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1377,
    commune_name: "الناظور",
    daira_name: "سيدي أعمر",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1381,
    commune_name: "سيدي عامر",
    daira_name: "سيدي أعمر",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1368,
    commune_name: "قوراية",
    daira_name: "قوراية",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1376,
    commune_name: "مسلمون",
    daira_name: "قوراية",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1364,
    commune_name: "شرشال",
    daira_name: "شرشال",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1370,
    commune_name: "حجرة النص",
    daira_name: "شرشال",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1378,
    commune_name: "سيدي غيلاس",
    daira_name: "شرشال",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1365,
    commune_name: "الداموس",
    daira_name: "الداموس",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1373,
    commune_name: "الأرهاط",
    daira_name: "الداموس",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1367,
    commune_name: "فوكة",
    daira_name: "فوكة",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1357,
    commune_name: "عين تاقورايت",
    daira_name: "بواسماعيل",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1360,
    commune_name: "بوهارون",
    daira_name: "بواسماعيل",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1361,
    commune_name: "بواسماعيل",
    daira_name: "بواسماعيل",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1371,
    commune_name: "خميستي",
    daira_name: "بواسماعيل",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1356,
    commune_name: "أحمر العين",
    daira_name: "أحمر العين",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1362,
    commune_name: "بورقيقة",
    daira_name: "أحمر العين",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1366,
    commune_name: "دواودة",
    daira_name: "فوكة",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1379,
    commune_name: "سيدي راشد",
    daira_name: "أحمر العين",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1358,
    commune_name: "الحطاطبة",
    daira_name: "القليعة",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1363,
    commune_name: "الشعيبة",
    daira_name: "القليعة",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1372,
    commune_name: "القليعة",
    daira_name: "القليعة",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1380,
    commune_name: "سيدي سميان",
    daira_name: "شرشال",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1382,
    commune_name: "تيبازة",
    daira_name: "تيبازة",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},
{
    id: 1359,
    commune_name: "بني ميلك",
    daira_name: "الداموس",
    wilaya_code: "42",
    wilaya_name: "تيبازة"
},

{
    id: 1384,
    commune_name: "عين البيضاء أحريش",
    daira_name: "عين البيضاء أحريش",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1411,
    commune_name: "تسالة لمطاعي",
    daira_name: "ترعي باينان",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1410,
    commune_name: "ترعي باينان",
    daira_name: "ترعي باينان",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1387,
    commune_name: "اعميرة اراس",
    daira_name: "ترعي باينان",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1408,
    commune_name: "تسدان حدادة",
    daira_name: "تسدان حدادة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1399,
    commune_name: "مينار زارزة",
    daira_name: "تسدان حدادة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1406,
    commune_name: "سيدي مروان",
    daira_name: "سيدي مروان",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1391,
    commune_name: "الشيقارة",
    daira_name: "سيدي مروان",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1397,
    commune_name: "حمالة",
    daira_name: "القرارم قوقة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1396,
    commune_name: "القرارم قوقة",
    daira_name: "القرارم قوقة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1412,
    commune_name: "تيبرقنت",
    daira_name: "الرواشد",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1404,
    commune_name: "الرواشد",
    daira_name: "الرواشد",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1392,
    commune_name: "دراحي بوصلاح",
    daira_name: "بوحاتم",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1414,
    commune_name: "زغاية",
    daira_name: "وادي النجاء",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1401,
    commune_name: "وادي النجاء",
    daira_name: "وادي النجاء",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1383,
    commune_name: "أحمد راشدي",
    daira_name: "وادي النجاء",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1407,
    commune_name: "تاجنانت",
    daira_name: "تاجنانت",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1385,
    commune_name: "عين الملوك",
    daira_name: "شلغوم العيد",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1403,
    commune_name: "أولاد اخلوف",
    daira_name: "تاجنانت",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1388,
    commune_name: "بن يحي عبد الرحمن",
    daira_name: "تاجنانت",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1409,
    commune_name: "التلاغمة",
    daira_name: "التلاغمة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1402,
    commune_name: "وادي سقان",
    daira_name: "التلاغمة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1400,
    commune_name: "وادي العثمانية",
    daira_name: "شلغوم العيد",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1386,
    commune_name: "عين التين",
    daira_name: "ميلة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1390,
    commune_name: "شلغوم العيد",
    daira_name: "شلغوم العيد",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1413,
    commune_name: "يحي بني قشة",
    daira_name: "فرجيوة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1395,
    commune_name: "فرجيوة",
    daira_name: "فرجيوة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1405,
    commune_name: "سيدي خليفة",
    daira_name: "ميلة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1398,
    commune_name: "ميلة",
    daira_name: "ميلة",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},
{
    id: 1389,
    commune_name: "بوحاتم",
    daira_name: "بوحاتم",
    wilaya_code: "43",
    wilaya_name: "ميلة"
},

  {
    id: 1440,
    commune_name: "خميس مليانة",
    daira_name: "خميس",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1446,
    commune_name: "سيدي الأخضر",
    daira_name: "خميس",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1415,
    commune_name: "عين البنيان",
    daira_name: "حمام ريغة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1420,
    commune_name: "عين التركي",
    daira_name: "حمام ريغة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1437,
    commune_name: "حمام ريغة",
    daira_name: "حمام ريغة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1429,
    commune_name: "بوراشد",
    daira_name: "جليدة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1439,
    commune_name: "الحسينية",
    daira_name: "بومدفع",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1430,
    commune_name: "جليدة",
    daira_name: "جليدة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1421,
    commune_name: "عريب",
    daira_name: "العامرة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1431,
    commune_name: "جمعة أولاد الشيخ",
    daira_name: "جليدة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1434,
    commune_name: "العامرة",
    daira_name: "العامرة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1435,
    commune_name: "العطاف",
    daira_name: "العطاف",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1449,
    commune_name: "تبركانين",
    daira_name: "العطاف",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1416,
    commune_name: "عين بويحيى",
    daira_name: "العبادية",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1433,
    commune_name: "العبادية",
    daira_name: "العبادية",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1447,
    commune_name: "تاشتة زقاغة",
    daira_name: "العبادية",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1422,
    commune_name: "بربوش",
    daira_name: "جندل",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1432,
    commune_name: "جندل",
    daira_name: "جندل",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1425,
    commune_name: "بن علال",
    daira_name: "مليانة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1443,
    commune_name: "وادي الشرفاء",
    daira_name: "جندل",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1428,
    commune_name: "بومدفع",
    daira_name: "بومدفع",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1418,
    commune_name: "عين الاشياخ",
    daira_name: "عين الاشياخ",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1419,
    commune_name: "عين السلطان",
    daira_name: "عين الاشياخ",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1444,
    commune_name: "واد الجمعة",
    daira_name: "عين الاشياخ",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1436,
    commune_name: "الماين",
    daira_name: "الروينة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1445,
    commune_name: "الروينة",
    daira_name: "الروينة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1450,
    commune_name: "زدين",
    daira_name: "الروينة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1426,
    commune_name: "بئر ولد خليفة",
    daira_name: "برج الأمير خالد",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1427,
    commune_name: "برج الأمير خالد",
    daira_name: "برج الأمير خالد",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1448,
    commune_name: "طارق بن زياد",
    daira_name: "برج الأمير خالد",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1423,
    commune_name: "بطحية",
    daira_name: "بطحية",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1424,
    commune_name: "بلعاص",
    daira_name: "بطحية",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1438,
    commune_name: "الحسانية",
    daira_name: "بطحية",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1417,
    commune_name: "عين الدفلى",
    daira_name: "عين الدفلى",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1442,
    commune_name: "مليانة",
    daira_name: "مليانة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },
  {
    id: 1441,
    commune_name: "المخاطرية",
    daira_name: "العامرة",
    wilaya_code: "44",
    wilaya_name: "عين الدفلة"
  },

  {
    id: 1462,
    commune_name: "تيوت",
    daira_name: "عين الصفراء",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1459,
    commune_name: "مغرار",
    daira_name: "مغرار",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1453,
    commune_name: "عسلة",
    daira_name: "عسلة",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1456,
    commune_name: "القصدير",
    daira_name: "مكمن بن عمار",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1457,
    commune_name: "مكمن بن عمار",
    daira_name: "مكمن بن عمار",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1452,
    commune_name: "عين الصفراء",
    daira_name: "عين الصفراء",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1458,
    commune_name: "المشرية",
    daira_name: "المشرية",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1455,
    commune_name: "البيوض",
    daira_name: "المشرية",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1451,
    commune_name: "عين بن خليل",
    daira_name: "المشرية",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1460,
    commune_name: "النعامة",
    daira_name: "النعامة",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1454,
    commune_name: "جنين بورزق",
    daira_name: "مغرار",
    wilaya_code: "45",
    wilaya_name: "النعامة"
},
{
    id: 1461,
    commune_name: "سفيسيفة",
    daira_name: "سفيسيفة",
    wilaya_code: "45",
    wilaya_name: "النعامة"
}

,

  {
    id: 1486,
    commune_name: "سيدي بومدين",
    daira_name: "عين الأربعاء",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1489,
    commune_name: "تامزورة",
    daira_name: "عين الأربعاء",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1471,
    commune_name: "شعبة اللحم",
    daira_name: "المالح",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1474,
    commune_name: "المالح",
    daira_name: "المالح",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1483,
    commune_name: "أولاد الكيحل",
    daira_name: "المالح",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1472,
    commune_name: "شنتوف",
    daira_name: "حمام بوحجر",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1490,
    commune_name: "تارقة",
    daira_name: "المالح",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1481,
    commune_name: "وادي الصباح",
    daira_name: "عين الأربعاء",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1473,
    commune_name: "العامرية",
    daira_name: "العامرية",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1479,
    commune_name: "حاسي الغلة",
    daira_name: "العامرية",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1482,
    commune_name: "أولاد بوجمعة",
    daira_name: "العامرية",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1463,
    commune_name: "أغلال",
    daira_name: "عين الكيحل",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1465,
    commune_name: "عين الكيحل",
    daira_name: "عين الكيحل",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1467,
    commune_name: "عين الطلبة",
    daira_name: "عين الكيحل",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1468,
    commune_name: "عقب الليل",
    daira_name: "عين الكيحل",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1469,
    commune_name: "بني صاف",
    daira_name: "بني صاف",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1478,
    commune_name: "الحساسنة",
    daira_name: "حمام بوحجر",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1476,
    commune_name: "الأمير عبد القادر",
    daira_name: "بني صاف",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1488,
    commune_name: "سيدي صافي",
    daira_name: "بني صاف",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1484,
    commune_name: "ولهاصة الغرابة",
    daira_name: "ولهاصة الغرابة",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1487,
    commune_name: "سيدي ورياش",
    daira_name: "ولهاصة الغرابة",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1464,
    commune_name: "عين الأربعاء",
    daira_name: "عين الأربعاء",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1475,
    commune_name: "المساعيد",
    daira_name: "العامرية",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1480,
    commune_name: "وادي برقش",
    daira_name: "حمام بوحجر",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1485,
    commune_name: "سيدي بن عدة",
    daira_name: "عين تموشنت",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1466,
    commune_name: "عين تموشنت",
    daira_name: "عين تموشنت",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1470,
    commune_name: "بوزجار",
    daira_name: "العامرية",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},
{
    id: 1477,
    commune_name: "حمام بوحجر",
    daira_name: "حمام بوحجر",
    wilaya_code: "46",
    wilaya_name: "عين تيموشنت"
},


      {
        id: 1493,
        commune_name: "ضاية بن ضحوة",
        daira_name: "ضاية بن ضحوة",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1500,
        commune_name: "المنصورة",
        daira_name: "المنصورة",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1494,
        commune_name: "العطف",
        daira_name: "بونورة",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1492,
        commune_name: "بونورة",
        daira_name: "بونورة",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1503,
        commune_name: "زلفانة",
        daira_name: "زلفانة",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1497,
        commune_name: "القرارة",
        daira_name: "القرارة",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1502,
        commune_name: "سبسب",
        daira_name: "متليلي",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1501,
        commune_name: "متليلي",
        daira_name: "متليلي",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1491,
        commune_name: "بريان",
        daira_name: "بريان",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },
    {
        id: 1496,
        commune_name: "غرداية",
        daira_name: "غرداية",
        wilaya_code: "47",
        wilaya_name: "غرداية"
    },


    {
  id: 1516,
  commune_name: "القطار",
  daira_name: "مازونة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1530,
  commune_name: "أولاد يعيش",
  daira_name: "عمي موسى",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1509,
  commune_name: "بني درقن",
  daira_name: "زمورة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1511,
  commune_name: "دار بن عبد الله",
  daira_name: "زمورة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1541,
  commune_name: "زمورة",
  daira_name: "زمورة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1512,
  commune_name: "جديوية",
  daira_name: "جديوية",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1519,
  commune_name: "حمري",
  daira_name: "جديوية",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1507,
  commune_name: "بلعسل بوزقزة",
  daira_name: "المطمر",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1517,
  commune_name: "المطمر",
  daira_name: "المطمر",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1534,
  commune_name: "سيدي  خطاب",
  daira_name: "المطمر",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1537,
  commune_name: "سيدي امحمد بن عودة",
  daira_name: "المطمر",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1505,
  commune_name: "عين طارق",
  daira_name: "عين طارق",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1518,
  commune_name: "حد الشكالة",
  daira_name: "عين طارق",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1515,
  commune_name: "الولجة",
  daira_name: "عمي موسى",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1522,
  commune_name: "مازونة",
  daira_name: "مازونة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1504,
  commune_name: "عين الرحمة",
  daira_name: "يلل",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1520,
  commune_name: "القلعة",
  daira_name: "يلل",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1538,
  commune_name: "سيدي سعادة",
  daira_name: "يلل",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1540,
  commune_name: "يلل",
  daira_name: "يلل",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1539,
  commune_name: "سوق الحد",
  daira_name: "الرمكة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1524,
  commune_name: "منداس",
  daira_name: "منداس",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1528,
  commune_name: "وادي السلام",
  daira_name: "منداس",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1535,
  commune_name: "سيدي لزرق",
  daira_name: "منداس",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1506,
  commune_name: "عمي موسى",
  daira_name: "عمي موسى",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1526,
  commune_name: "واريزان",
  daira_name: "وادي رهيو",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1525,
  commune_name: "مرجة سيدي عابد",
  daira_name: "وادي رهيو",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1531,
  commune_name: "أولاد سيدي الميهوب",
  daira_name: "جديوية",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1508,
  commune_name: "بن داود",
  daira_name: "غليزان",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1529,
  commune_name: "وادي رهيو",
  daira_name: "وادي رهيو",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1513,
  commune_name: "الحاسي",
  daira_name: "عمي موسى",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1536,
  commune_name: "سيدي أمحمد بن علي",
  daira_name: "سيدي أمحمد بن علي",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1523,
  commune_name: "مديونة",
  daira_name: "سيدي أمحمد بن علي",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1510,
  commune_name: "بني زنطيس",
  daira_name: "سيدي أمحمد بن علي",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1527,
  commune_name: "وادي الجمعة",
  daira_name: "الحمادنة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1521,
  commune_name: "لحلاف",
  daira_name: "وادي رهيو",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1533,
  commune_name: "غليزان",
  daira_name: "غليزان",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1514,
  commune_name: "الحمادنة",
  daira_name: "الحمادنة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},
{
  id: 1532,
  commune_name: "الرمكة",
  daira_name: "الرمكة",
  wilaya_code: "48",
  wilaya_name: "غليزان"
},


{
  id: 25,
  commune_name: "تنركوك",
  daira_name: "تنركوك",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 24,
  commune_name: "تيميمون",
  daira_name: "تيميمون",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 15,
  commune_name: "أولاد السعيد",
  daira_name: "تيميمون",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 12,
  commune_name: "المطارفة",
  daira_name: "أوقروت",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 19,
  commune_name: "طالمين",
  daira_name: "شروين",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 14,
  commune_name: "أولاد عيسى",
  daira_name: "شروين",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 7,
  commune_name: "شروين",
  daira_name: "شروين",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 3,
  commune_name: "أوقروت",
  daira_name: "أوقروت",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 8,
  commune_name: "دلدول",
  daira_name: "أوقروت",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},
{
  id: 11,
  commune_name: "قصر قدور",
  daira_name: "تنركوك",
  wilaya_code: "49",
  wilaya_name: "تيميمون"
},


{
    id: 23,
    commune_name: "تيمياوين",
    daira_name: "برج باجي مختار",
    wilaya_code: "50",
    wilaya_name: "برج باجي مختار"
},
{
    id: 5,
    commune_name: "برج باجي مختار",
    daira_name: "برج باجي مختار",
    wilaya_code: "50",
    wilaya_name: "برج باجي مختار"
},
{
    id: 258,
    commune_name: "رأس الميعاد",
    daira_name: "سيدي  خالد",
    wilaya_code: "51",
    wilaya_name: "أولاد جلال"
},
{
    id: 232,
    commune_name: "بسباس",
    daira_name: "سيدي  خالد",
    wilaya_code: "51",
    wilaya_name: "أولاد جلال"
},
{
    id: 259,
    commune_name: "سيدي  خالد",
    daira_name: "سيدي  خالد",
    wilaya_code: "51",
    wilaya_name: "أولاد جلال"
},
{
    id: 240,
    commune_name: "الدوسن",
    daira_name: "أولاد جلال",
    wilaya_code: "51",
    wilaya_name: "أولاد جلال"
},
{
    id: 237,
    commune_name: "الشعيبة",
    daira_name: "أولاد جلال",
    wilaya_code: "51",
    wilaya_name: "أولاد جلال"
},
{
    id: 255,
    commune_name: "أولاد جلال",
    daira_name: "أولاد جلال",
    wilaya_code: "51",
    wilaya_name: "أولاد جلال"
},
{
    id: 265,
    commune_name: "بني عباس",
    daira_name: "بني عباس",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 282,
    commune_name: "تامترت",
    daira_name: "بني عباس",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 271,
    commune_name: "إقلي",
    daira_name: "إقلي",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 269,
    commune_name: "الواتة",
    daira_name: "الواتة",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 279,
    commune_name: "أولاد خضير",
    daira_name: "أولاد خضير",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 273,
    commune_name: "كرزاز",
    daira_name: "كرزاز",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 283,
    commune_name: "تيمودي",
    daira_name: "كرزاز",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 274,
    commune_name: "القصابي",
    daira_name: "أولاد خضير",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 266,
    commune_name: "بن يخلف",
    daira_name: "كرزاز",
    wilaya_code: "52",
    wilaya_name: "بني عباس"
},
{
    id: 360,
    commune_name: "إينغر",
    daira_name: "إينغر",
    wilaya_code: "53",
    wilaya_name: "عين صالح"
},
{
    id: 357,
    commune_name: "عين صالح",
    daira_name: "عين صالح",
    wilaya_code: "53",
    wilaya_name: "عين صالح"
},
{
    id: 358,
    commune_name: "فقارة الزوى",
    daira_name: "عين صالح",
    wilaya_code: "53",
    wilaya_name: "عين صالح"
},
{
    id: 363,
    commune_name: "تين زواتين",
    daira_name: "تين زواتين",
    wilaya_code: "54",
    wilaya_name: "عين قزام"
},
{
    id: 356,
    commune_name: "عين قزام",
    daira_name: "عين قزام",
    wilaya_code: "54",
    wilaya_name: "عين قزام"
},


{
    id: 1107,
    commune_name: "تماسين",
    daira_name: "تماسين",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1104,
    commune_name: "سيدي سليمان",
    daira_name: "المقارين",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1097,
    commune_name: "المقارين",
    daira_name: "المقارين",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1099,
    commune_name: "النزلة",
    daira_name: "تقرت",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1091,
    commune_name: "بلدة اعمر",
    daira_name: "تماسين",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1106,
    commune_name: "تبسبست",
    daira_name: "تقرت",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1108,
    commune_name: "تقرت",
    daira_name: "تقرت",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1105,
    commune_name: "الطيبات",
    daira_name: "الطيبات",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1092,
    commune_name: "العالية",
    daira_name: "الحجيرة",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1094,
    commune_name: "الحجيرة",
    daira_name: "الحجيرة",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1090,
    commune_name: "بن ناصر",
    daira_name: "الطيبات",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1098,
    commune_name: "المنقر",
    daira_name: "الطيبات",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1109,
    commune_name: "الزاوية العابدية",
    daira_name: "تقرت",
    wilaya_code: "55",
    wilaya_name: "تقرت"
},
{
    id: 1161,
    commune_name: "جانت",
    daira_name: "جانت",
    wilaya_code: "56",
    wilaya_name: "جانت"
},
{
    id: 1158,
    commune_name: "برج الحواس",
    daira_name: "جانت",
    wilaya_code: "56",
    wilaya_name: "جانت"
},
{
    id: 1296,
    commune_name: "أم الطيور",
    daira_name: "المغير",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1300,
    commune_name: "سيدي عمران",
    daira_name: "جامعة",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1293,
    commune_name: "المرارة",
    daira_name: "جامعة",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1281,
    commune_name: "جامعة",
    daira_name: "جامعة",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1306,
    commune_name: "تندلة",
    daira_name: "جامعة",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1284,
    commune_name: "المغير",
    daira_name: "المغير",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1303,
    commune_name: "سطيل",
    daira_name: "المغير",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1302,
    commune_name: "سيدي خليل",
    daira_name: "المغير",
    wilaya_code: "57",
    wilaya_name: "المغير"
},
{
    id: 1495,
    commune_name: "المنيعة",
    daira_name: "المنيعة",
    wilaya_code: "58",
    wilaya_name: "المنيعة"
},
{
    id: 1499,
    commune_name: "حاسي القارة",
    daira_name: "المنيعة",
    wilaya_code: "58",
    wilaya_name: "المنيعة"
},
{
    id: 1498,
    commune_name: "حاسي الفحل",
    daira_name: "المنصورة",
    wilaya_code: "58",
    wilaya_name: "المنيعة"
}

];




export default function Signin() {
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [selectedDaira, setSelectedDaira] = useState("");
  const [dairas, setDairas] = useState([]);
  const [communes, setCommunes] = useState([]);

  // 📌 Changement de wilaya
  const handleWilayaChange = (e) => {
    const wilaya = e.target.value;
    setSelectedWilaya(wilaya);
    setSelectedDaira("");
    setCommunes([]);

    const wilayaDairas = [
      ...new Set(
        allCommunes
          .filter((c) => c.wilaya_name === wilaya)
          .map((c) => c.daira_name)
      ),
    ];
    setDairas(wilayaDairas);
  };

  // 📌 Changement de daira
  const handleDairaChange = (e) => {
    const daira = e.target.value;
    setSelectedDaira(daira);

    const dairaCommunes = allCommunes
      .filter((c) => c.daira_name === daira && c.wilaya_name === selectedWilaya)
      .map((c) => c.commune_name);
    setCommunes(dairaCommunes);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white pt-24" dir="rtl">
      <div className="bg-white w-full rounded-lg shadow-md p-6">
        {/* Titre */}
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
          إنشاء حساب جديد
        </h2>

        {/* Alerte */}
        <div className="bg-pink-50 border border-pink-300 text-pink-700 p-3 rounded-md text-sm mb-6">
          <span className="font-semibold">إشعار مهم:</span> الرجاء عدم التسجيل
          باستخدام أسماء حقيقية للحفاظ على الخصوصية. خاصة بالنسبة للنساء
        </div>

        {/* Formulaire */}
        <form className="space-y-8">
          {/* الاسم + الهاتف */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                الاسم<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                disabled
                value="فاعل خير"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                الهاتف<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="مثال: 0555 55 55 55"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* كلمة المرور + تأكيد كلمة المرور */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                كلمة المرور<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="password"
                placeholder="أدخل كلمة المرور الخاصة بك"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                تأكيد كلمة المرور<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="password"
                placeholder="تأكيد كلمة المرور الجديدة الخاصة بك"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* البريد الإلكتروني + فصيلة الدم */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="أدخل عنوان بريدك الإلكتروني"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                فصيلة الدم<span className="text-red-500">*</span>
              </label>
              <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option selected disabled>اختر نوع دمك</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
          </div>

          {/* وسيلة الاتصال + وقت الاتصال */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                وسيلة الاتصال<span className="text-red-500">*</span>
              </label>
              <select defaultValue="" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option value="" selected disabled>اختر وسيلة الاتصال</option>
                <option>اتصال</option>
                <option>رسالة نصية</option>
                <option>اتصال ورسالة نصية</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                وقت الاتصال<span className="text-red-500">*</span>
              </label>
              <select defaultValue="" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option value="" selected disabled>وقت الاتصال المفضل</option>
                <option>صباحاً</option>
                <option>مساءً</option>
                <option>في أي وقت</option>
              </select>
            </div>
          </div>

            {/* Sélecteurs Wilaya / Daïra / Commune */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <select value={selectedWilaya} onChange={handleWilayaChange} className="border p-2 rounded-md">
              <option value="" selected disabled>الولاية</option>
              <option value="أدرار">01 - أدرار</option>
              <option value="الشلف">02 - الشلف</option>
              <option value="الأغواط">03 - الأغواط</option>
              <option value="أم البواقي">04 - أم البواقي</option>
              <option value="باتنة">05 - باتنة</option>
              <option value="بجاية">06 - بجاية</option>
              <option value="بسكرة">07 - بسكرة</option>
              <option value="بشار">08 - بشار</option>
              <option value="البليدة">09 - البليدة</option>
              <option value="البويرة">10 - البويرة</option>
              <option value="تمنراست">11 - تمنراست</option>
              <option value="تبسة">12 - تبسة</option>
              <option value="تلمسان">13 - تلمسان</option>
              <option value="تيارت">14 - تيارت</option>
              <option value="تيزي وزو">15 - تيزي وزو</option>
              <option value="الجزائر">16 - الجزائر</option>
              <option value="الجلفة">17 - الجلفة</option>
              <option value="جيجل">18 - جيجل</option>
              <option value="سطيف">19 - سطيف</option>
              <option value="سعيدة">20 - سعيدة</option>
              <option value="سكيكدة">21 - سكيكدة</option>
              <option value="سيدي بلعباس">22 - سيدي بلعباس</option>
              <option value="عنابة">23 - عنابة</option>
              <option value="قالمة">24 - قالمة</option>
              <option value="قسنطينة">25 - قسنطينة</option>
              <option value="المدية">26 - المدية</option>
              <option value="مستغانم">27 - مستغانم</option>
              <option value="المسيلة">28 - المسيلة</option>
              <option value="معسكر">29 - معسكر</option>
              <option value="ورقلة">30 - ورقلة</option>
              <option value="وهران">31 - وهران</option>
              <option value="البيض">32 - البيض</option>
              <option value="إليزي">33 - إليزي</option>
              <option value="برج بوعريريج">34 - برج بوعريريج</option>
              <option value="بومرداس">35 - بومرداس</option>
              <option value="الطارف">36 - الطارف</option>
              <option value="تندوف">37 - تندوف</option>
              <option value="تيسمسيلت">38 - تيسمسيلت</option>
              <option value="الوادي">39 - الوادي</option>
              <option value="خنشلة">40 - خنشلة</option>
              <option value="سوق أهراس">41 - سوق أهراس</option>
              <option value="تيبازة">42 - تيبازة</option>
              <option value="ميلة">43 - ميلة</option>
              <option value="عين الدفلى">44 - عين الدفلى</option>
              <option value="النعامة">45 - النعامة</option>
              <option value="عين تموشنت">46 - عين تموشنت</option>
              <option value="غرداية">47 - غرداية</option>
              <option value="غليزان">48 - غليزان</option>
              <option value="تيميمون">49 - تيميمون</option>
              <option value="برج باجي مختار">50 - برج باجي مختار</option>
              <option value="أولاد جلال">51 - أولاد جلال</option>
              <option value="بني عباس">52 - بني عباس</option>
              <option value="عين صالح">53 - عين صالح</option>
              <option value="عين قزام">54 - عين قزام</option>
              <option value="تقرت">55 - تقرت</option>
              <option value="جانت">56 - جانت</option>
              <option value="المغير">57 - المغير</option>
              <option value="المنيعة">58 - المنيعة</option>

              
              {/* 🔹 Ajoute les autres wilayas ici */}
            </select>

            <select value={selectedDaira} onChange={handleDairaChange} className="border p-2 rounded-md" disabled={!selectedWilaya}>
              <option value="" selected disabled>الدائرة</option>
              {dairas.map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>

            <select className="border p-2 rounded-md" disabled={!selectedDaira}>
              <option value="" selected disabled>البلدية</option>
              {communes.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Bouton */}
          <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-md py-2 font-bold">
            التسجيل
          </button>

          {/* Lien */}
          <p className="text-center text-gray-600 text-sm mt-2">
            بالفعل عضو؟{" "}
            <Link href="/Login" className="text-[#ec4261] font-semibold hover:underline">
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}








