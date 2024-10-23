import { Page, Text, View, Document, PDFViewer, Font, StyleSheet } from '@react-pdf/renderer'
import source from '@/assets/fonts/Cairo-VariableFont_slnt,wght.ttf'
import { HeaderCell } from '@/pages/reports-app/header-cell.tsx'
import { TableCell } from '@/pages/reports-app/table-cell.tsx'
const OWNER = 'Civil Information Technology Co.'

Font.register({ family: 'Cairo', src: source }) // Register a font that supports Arabic

const styles = StyleSheet.create({
  primaryLabelCell: { minWidth: '15%', height: '100%', fontSize: '14px' },
  secondaryLabelCell: { minWidth: '15%', height: 30, fontSize: '10.5px' },
  columnCell: { fontSize: '10.5px', fontWeight: 700, width: '30%' },
  tableCell: { fontSize: '10.5px', fontWeight: 700, width: '10%', height: '100%' },
  tableRow: { display: 'flex', flexDirection: 'row-reverse' },
})

// Create Document Component
export const GovernorateStatsPdf = () => (
  <PDFViewer className={'h-screen w-full'}>
    <Document
      style={{ fontFamily: 'Cairo' }}
      title={'تقرير'}
      language={'arabic'}
      author={OWNER}
      producer={OWNER}
      creator={OWNER}
    >
      <Page size='A4' style={{ display: 'flex', flexDirection: 'column', padding: 10 }} orientation={'landscape'}>
        <HeaderCell title={'مصدرات كفر الشيخ 01/09/2024 حتى 16/09/2024'} />
        <View style={styles.tableRow}>
          <HeaderCell title={'السجل'} style={styles.secondaryLabelCell} />
          <HeaderCell title={'ميلاد عادي'} style={styles.columnCell} />
          <HeaderCell title={'ميلاد برسم'} style={styles.columnCell} />
          <HeaderCell title={'وفاة'} style={styles.columnCell} />
          <HeaderCell title={'زواج'} style={styles.columnCell} />
          <HeaderCell title={'طلاق'} style={styles.columnCell} />
          <HeaderCell title={'قيد عائلي'} style={styles.columnCell} />
          <HeaderCell title={'قيد فردي'} style={styles.columnCell} />
          <HeaderCell title={'تعذر'} style={styles.columnCell} />
          <HeaderCell title={'الاستمارات'} style={styles.columnCell} />
          <HeaderCell title={'استمارة 50'} style={styles.columnCell} />
          <HeaderCell title={'استمارة 125'} style={styles.columnCell} />
          <HeaderCell title={'استمارة 175'} style={styles.columnCell} />
        </View>
        <View style={{ ...styles.tableRow, height: '20%' }}>
          <HeaderCell title={'كفر الشيخ'} style={styles.primaryLabelCell} />
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View style={{ ...styles.tableRow, height: '35%' }}>
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
            </View>
            <View style={{ ...styles.tableRow, height: '35%', marginTop: '-2px' }}>
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
            </View>
            <View style={{ ...styles.tableRow, height: '35%', marginTop: '-2px' }}>
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
            </View>
          </View>
        </View>

        <View style={{ ...styles.tableRow, height: '20%', marginTop: '-2px' }}>
          <HeaderCell title={'المميز'} style={styles.primaryLabelCell} />
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View style={{ ...styles.tableRow, minHeight: 30 }}>
              <HeaderCell title={'ميلاد عادي'} style={styles.columnCell} />
              <HeaderCell title={'ميلاد برسم'} style={styles.columnCell} />
              <HeaderCell title={'وفاة'} style={styles.columnCell} />
              <HeaderCell title={'زواج'} style={styles.columnCell} />
              <HeaderCell title={'طلاق'} style={styles.columnCell} />
              <HeaderCell title={'قيد عائلي'} style={styles.columnCell} />
              <HeaderCell title={'قيد فردي'} style={styles.columnCell} />
              <HeaderCell title={'تعذر'} style={styles.columnCell} />
              <HeaderCell title={'الاستمارات'} style={styles.columnCell} />
              <HeaderCell title={'استمارة 50'} style={styles.columnCell} />
              <HeaderCell title={'استمارة 125'} style={styles.columnCell} />
              <HeaderCell title={'استمارة 175'} style={styles.columnCell} />
            </View>
            <View style={{ ...styles.tableRow, minHeight: '30%' }}>
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
              <TableCell value={12123} style={styles.tableCell} />
            </View>
            <View style={{ ...styles.tableRow, height: '30%', marginTop: '-2px' }}>
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
            </View>
            <View style={{ ...styles.tableRow, height: '30%', marginTop: '-2px' }}>
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
              <TableCell value={null} style={styles.tableCell} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
)
