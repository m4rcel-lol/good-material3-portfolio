export default function BlobBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, #D0BCFF 0%, #4F378B 60%, transparent 100%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-10 animate-blob-slow"
        style={{ background: 'radial-gradient(circle, #80DEEA 0%, #006064 60%, transparent 100%)', filter: 'blur(80px)', animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-10 animate-blob"
        style={{ background: 'radial-gradient(circle, #B39DDB 0%, #311B92 60%, transparent 100%)', filter: 'blur(80px)', animationDelay: '4s' }}
      />
      <div
        className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 animate-blob-slow"
        style={{ background: 'radial-gradient(circle, #EFB8C8 0%, #633B48 60%, transparent 100%)', filter: 'blur(80px)', animationDelay: '1s' }}
      />
    </div>
  )
}
