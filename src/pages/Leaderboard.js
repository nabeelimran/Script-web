function LeaderBoard() {
  return (
    <>
      <h2 className="text-center text-4xl py-10">LeaderBoard</h2>
      <div className="bg-[#161616] container rounded-xl py-8 px-8">
        <table className="text-left w-full">
          <thead>
            <tr className="border-b border-t">
              <th className="text-[#ffef00] text-xl w-3/4 py-4">
                Top Accounts
              </th>
              <th className="text-[#ffef00] py-4">Total Accounts: 93</th>
            </tr>
          </thead>
          <thead>
            <tr className="border-b">
              <th className="text-[#ffef00] py-4">Address</th>
              <th className="text-[#ffef00] py-4">Reward Point</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4">
                0x21dfea78442657c9c61802b879b5b2d4a2783f66
              </td>
              <td className="py-4">60070</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LeaderBoard;
