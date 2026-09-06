import * as React from 'react';
import Layout from '../components/layout';
import BindruneGenerator from '../components/bindruneGenerator';
import str from '../components/lang';

export default function BindruneGeneratorPage() {
  return <Layout><BindruneGenerator str={str} /></Layout>;
}
