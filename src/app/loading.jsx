

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-indigo-50 to-purple-50">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-[#161439]">SkillSphere</h2>

        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-gray-500 text-sm">Loading content...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
