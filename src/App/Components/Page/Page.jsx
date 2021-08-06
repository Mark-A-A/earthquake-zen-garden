import React from 'react';
import Container from '@material-ui/core/Container';

import '../../styles/style.scss';

export function Page(props) {
  const { title, pageName, children, containerSize = 'md' } = props;

  return (
    <div className={`page ${pageName}`}>
      <Container maxWidth={containerSize}>
        <div className="page-title-header">
          <h3>{title}</h3>
        </div>
        {children}
      </Container>
    </div>
  );
}
