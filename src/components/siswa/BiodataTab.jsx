import Item from "../Item";

export default function BiodataTab() {
  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 text-gray-700">
        <h2 className="font-semibold mb-4">Data Pribadi</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <Item label="Nama Lengkap" value="Dimas Alip Faturrohman" />
          <Item label="NIS" value="202410001" />
          <Item label="Kelas" value="X RPL 2" />
          <Item label="Jenis Kelamin" value="Laki-laki" />
          <Item label="Tempat Lahir" value="Bogor" />
          <Item label="Tanggal Lahir" value="15 April 2008" />
          <Item label="Alamat" value="Jasinga, Bogor" />
          <Item label="No. HP" value="081234567890" />
        </div>
      </div>
    </>
  );
}
