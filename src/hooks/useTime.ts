import { useEffect, useState } from 'react';
/**
 * hooksサンプル マウント完了時の時間取得
 * @returns [Date]
 */
const useTime = () => {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    setTime(new Date());
  }, []);
  return [time];
};

export default useTime;
