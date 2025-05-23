'use client';

import dynamic from 'next/dynamic';

const ClockStyleTimePicker = dynamic(
  () => import('@/app/components/ClockStyleTimePicker'),
  { ssr: false }
);

export default function Page() {
  return <ClockStyleTimePicker />;
}