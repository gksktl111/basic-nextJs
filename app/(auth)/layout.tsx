/**
 * AuthLayout 컴포넌트는 인증 페이지의 레이아웃을 정의합니다.
 *
 * @param {React.ReactNode} children - AuthLayout에 포함될 하위 컴포넌트들입니다.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div>{children}</div>
    </div>
  );
}
