import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지 이동시 스크롤 상단으로 고정시켜주는 함수
export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
