import MedicalScene from "./MedicalScene";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#073b31] text-white">
      {/* مشهد الـ 3D الخرافي شغال في الخلفية بالكامل */}
      <MedicalScene />

      {/* هنا تقدر تحط أقسام الـ Landing Page بتاعتك فوق الخلفية الـ 3D */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-black text-[#76d6a4] mb-4">
          مراكز مصر للتأهيل | Masr Rehab
        </h1>
        <p className="text-xl text-stone-300">
          الموقع الآن مدعوم بمحرك 3D تفاعلي يتحرك مع الماوس!
        </p>
      </main>
    </div>
  );
}
