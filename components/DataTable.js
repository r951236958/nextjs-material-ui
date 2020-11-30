import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'catalog', headerName: '種類', width: 130 },
  { field: 'item', headerName: '名稱', width: 130 },
  { field: 'img', headerName: '圖片', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('catalog') || ''} ${params.getValue('item') || ''}`,
  },
];

const rows = [
  {
    id: 1,
    catalog: '傢俱',
    item: '五重塔',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrGojyu_Remake_0_0.png',
  },
  {
    id: 2,
    catalog: '傢俱',
    item: '人面獅身像',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrSphinx.png',
  },
  {
    id: 3,
    catalog: '傢俱',
    item: '南極點',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrSouthpole.png',
  },
  {
    id: 4,
    catalog: '頭部',
    item: '唐裝帽',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHatChina0.png',
  },
  {
    id: 5,
    catalog: '頭部',
    item: '墨西哥草帽',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHatSombrero0.png',
  },
  {
    id: 6,
    catalog: '頭部',
    item: '官帽',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHatKanboBlack.png',
  },
  {
    id: 7,
    catalog: '頭部',
    item: '小辮子',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapWigPigtail.png',
  },
  {
    id: 8,
    catalog: '傢俱',
    item: '巨石陣',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrStonehenge.png',
  },
  {
    id: 9,
    catalog: '擺飾',
    item: '招財貓',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrManekineko_Remake_0_0.png',
  },
  {
    id: 10,
    catalog: '頭部',
    item: '提洛爾帽子',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHatTyrolean1.png',
  },
  {
    id: 11,
    catalog: '傢俱',
    item: '摩艾石像',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrMoai.png',
  },
  {
    id: 12,
    catalog: '擺飾',
    item: '日本刀',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrJapanSword_Remake_0_0.png',
  },
  {
    id: 13,
    catalog: '頭部',
    item: '武士頭',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapWigSamurai.png',
  },
  {
    id: 14,
    catalog: '傢俱',
    item: '比薩斜塔',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrPisa.png',
  },
  {
    id: 15,
    catalog: '頭部',
    item: '烏茲別克帽子',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHatUzbek0.png',
  },
  {
    id: 16,
    catalog: '頭部',
    item: '特本頭巾',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHelmetTurban1.png',
  },
  {
    id: 17,
    catalog: '頭部',
    item: '老翁能面具',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapMaskOkinaWhite.png',
  },
  {
    id: 18,
    catalog: '擺飾',
    item: '胡桃鉗娃娃',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrNutcracker_Remake_0_0.png',
  },
  {
    id: 19,
    catalog: '傢俱',
    item: '自由女神像',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrLiberty.png',
  },
  {
    id: 20,
    catalog: '擺飾',
    item: '草裙舞娃娃',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrHuladoll_Remake_0_0.png',
  },
  {
    id: 21,
    catalog: '頭部',
    item: '荷蘭帽子',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapBangsVolendamWhite.png',
  },
  {
    id: 22,
    catalog: '頭部',
    item: '藝妓假髮',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapWigGeisya1.png',
  },
  {
    id: 23,
    catalog: '頭部',
    item: '蘇格蘭帽',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHatScotland1.png',
  },
  {
    id: 24,
    catalog: '擺飾',
    item: '達拉木馬',
    img:
      'https://acnhcdn.com/latest/FtrIcon/FtrDalecarlianhorse_Remake_0_0.png',
  },
  {
    id: 25,
    catalog: '傢俱',
    item: '金字塔',
    img: 'https://acnhcdn.com/latest/FtrIcon/FtrPyramid.png',
  },
  {
    id: 26,
    catalog: '頭部',
    item: '金幣頭飾',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHelmetCoinGold.png',
  },
  {
    id: 27,
    catalog: '頭部',
    item: '阿拉伯帽子',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapHelmetKandula0.png',
  },
  {
    id: 28,
    catalog: '頭部',
    item: '面紗',
    img: 'https://acnhcdn.com/latest/FtrIcon/CapFullfaceVeil0.png',
  },
  {
    id: 29,
    catalog: '飾品',
    item: '骷髏糖面具',
    img: 'https://acnhcdn.com/latest/FtrIcon/AccessoryGlassmouthCatrina0.png',
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
