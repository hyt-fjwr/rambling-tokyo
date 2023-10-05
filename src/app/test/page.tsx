'use client';
import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// ランダムな整数を生成する関数
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// メインのコンポーネント
const Home: NextPage = () => {
  // 状態としてランダムな整数を保持する
  const [randomNumber, setRandomNumber] = useState<number>(0);

  // ボタンがクリックされたときの処理
  const handleClick = () => {
    // 1 から 100 の範囲でランダムな整数を生成して状態を更新する
    setRandomNumber(getRandomInt(1, 100));
  };

  return (
    <div>
      <Head>
        <title>Random Number Generator</title>
      </Head>
      <main>
        <h1>Random Number Generator</h1>
        <p>ボタンを押すと、1 から 100 の範囲でランダムな整数が表示されます。</p>
        <button className="py-2 px-2 bg-gray-800 rounded-xl hover:border hover:border-gray-500" onClick={handleClick}>Generate</button>
        <p>Random Number: {randomNumber}</p>
      </main>
    </div>
  );
};

export default Home;
