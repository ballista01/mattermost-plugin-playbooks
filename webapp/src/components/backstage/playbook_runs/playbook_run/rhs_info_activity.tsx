// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

import {Section, SectionTitle} from 'src/components/backstage/playbook_runs/playbook_run/rhs_info_styles';

const RHSInfoActivity = () => {
    const {formatMessage} = useIntl();

    return (
        <Section>
            <SectionTitle>{formatMessage({defaultMessage: 'Recent Activity'})}</SectionTitle>
        </Section>
    );
};

export default RHSInfoActivity;
